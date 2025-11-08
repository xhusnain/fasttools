"use client"

import { Square, Circle as CircleIcon, Triangle as TriangleIcon, Minus, ArrowRight, Star, Hexagon, Pentagon, Diamond, Heart } from 'lucide-react'
import { Icon } from '@iconify/react'
import { getFabric } from '@/lib/fabric'

interface ElementsPanelProps {
  canvas: any
}

export function ElementsPanel({ canvas }: ElementsPanelProps) {
  const [showAllIcons, setShowAllIcons] = useState(false)

  const addIcon = async (iconData: { id: string, name: string, icon: string }) => {
    if (!canvas) {
      console.error('Canvas not available')
      return
    }

    try {
      const fabric = await getFabric()
      if (!fabric) throw new Error('Fabric.js not available')

      const centerX = canvas.getWidth() / 2
      const centerY = canvas.getHeight() / 2

      const iconUrl = `https://api.iconify.design/${iconData.icon}.svg?height=100`

      const imgElement = new Image()
      imgElement.crossOrigin = 'anonymous'

      imgElement.onload = () => {
        try {

          const fabricImg = new fabric.Image(imgElement, {
            left: centerX,
            top: centerY,
            originX: 'center',
            originY: 'center',
            selectable: true,
            hasControls: true,
            hasBorders: true
          })

          canvas.add(fabricImg)
          canvas.setActiveObject(fabricImg)
          canvas.renderAll()
        } catch (error) {
          console.error(`Failed to add icon "${iconData.name}" to canvas:`, error)
        }
      }

      imgElement.onerror = () => {
        console.error(`Failed to load icon "${iconData.name}" (${iconData.icon})`)

        const placeholder = new fabric.Rect({
          left: centerX,
          top: centerY,
          originX: 'center',
          originY: 'center',
          width: 100,
          height: 100,
          fill: '#f0f0f0',
          stroke: '#ccc',
          strokeWidth: 2,
          rx: 10,
          ry: 10,
          selectable: true,
          hasControls: true,
          hasBorders: true
        })

        const text = new fabric.Text('?', {
          left: centerX,
          top: centerY,
          originX: 'center',
          originY: 'center',
          fontSize: 50,
          fill: '#999',
          selectable: false
        })

        const group = new fabric.Group([placeholder, text], {
          left: centerX,
          top: centerY,
          originX: 'center',
          originY: 'center',
          selectable: true,
          hasControls: true,
          hasBorders: true
        })

        canvas.add(group)
        canvas.setActiveObject(group)
        canvas.renderAll()
      }

      imgElement.src = iconUrl

    } catch (error) {
      console.error(`❌ Exception while adding icon: "${iconData.name}"`, error)
    }
  }

  const addShape = async (shapeType: string) => {
    if (!canvas) {
      console.error('Canvas not available')
      return
    }

    try {
      const fabric = await getFabric()

      if (!fabric) {
        throw new Error('Fabric.js not available')
      }

      let shape: any
      const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4', '#14b8a6']
      const randomColor = colors[Math.floor(Math.random() * colors.length)]

      const centerX = canvas.getWidth() / 2
      const centerY = canvas.getHeight() / 2

      switch (shapeType) {
        case 'rectangle':
          shape = new fabric.Rect({
            width: 120,
            height: 80,
            fill: randomColor,
            left: centerX,
            top: centerY,
            originX: 'center',
            originY: 'center',
            stroke: 'rgba(0,0,0,0.1)',
            strokeWidth: 2,
            selectable: true,
            hasControls: true,
            hasBorders: true
          })
          break

        case 'circle':
          shape = new fabric.Circle({
            radius: 50,
            fill: randomColor,
            left: centerX,
            top: centerY,
            originX: 'center',
            originY: 'center',
            stroke: 'rgba(0,0,0,0.1)',
            strokeWidth: 2,
            selectable: true,
            hasControls: true,
            hasBorders: true
          })
          break

        case 'triangle':
          shape = new fabric.Triangle({
            width: 100,
            height: 100,
            fill: randomColor,
            left: centerX,
            top: centerY,
            originX: 'center',
            originY: 'center',
            stroke: 'rgba(0,0,0,0.1)',
            strokeWidth: 2,
            selectable: true,
            hasControls: true,
            hasBorders: true
          })
          break

        case 'ellipse':
          shape = new fabric.Ellipse({
            rx: 70,
            ry: 40,
            fill: randomColor,
            left: centerX,
            top: centerY,
            originX: 'center',
            originY: 'center',
            stroke: 'rgba(0,0,0,0.1)',
            strokeWidth: 2,
            selectable: true,
            hasControls: true,
            hasBorders: true
          })
          break

        case 'line':
          shape = new fabric.Line([0, 0, 150, 0], {
            left: centerX - 75,
            top: centerY,
            stroke: randomColor,
            strokeWidth: 4,
            selectable: true,
            hasControls: true,
            hasBorders: true
          })
          break

        case 'arrow':
          const arrowPath = 'M 0 0 L 100 0 L 90 -10 L 110 0 L 90 10 L 100 0 Z'
          shape = new fabric.Path(arrowPath, {
            left: centerX,
            top: centerY,
            originX: 'center',
            originY: 'center',
            fill: randomColor,
            stroke: 'rgba(0,0,0,0.1)',
            strokeWidth: 1,
            selectable: true,
            hasControls: true,
            hasBorders: true
          })
          break

        case 'star':
          const starPath = 'M 0 -50 L 14 -20 L 47 -15 L 23 7 L 29 40 L 0 25 L -29 40 L -23 7 L -47 -15 L -14 -20 Z'
          shape = new fabric.Path(starPath, {
            left: centerX,
            top: centerY,
            originX: 'center',
            originY: 'center',
            fill: randomColor,
            stroke: 'rgba(0,0,0,0.1)',
            strokeWidth: 2,
            selectable: true,
            hasControls: true,
            hasBorders: true
          })
          break

        case 'hexagon':
          const hexPoints = []
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i
            hexPoints.push({
              x: 50 * Math.cos(angle),
              y: 50 * Math.sin(angle)
            })
          }
          shape = new fabric.Polygon(hexPoints, {
            left: centerX,
            top: centerY,
            originX: 'center',
            originY: 'center',
            fill: randomColor,
            stroke: 'rgba(0,0,0,0.1)',
            strokeWidth: 2,
            selectable: true,
            hasControls: true,
            hasBorders: true
          })
          break

        case 'pentagon':
          const pentPoints = []
          for (let i = 0; i < 5; i++) {
            const angle = (Math.PI * 2 / 5) * i - Math.PI / 2
            pentPoints.push({
              x: 50 * Math.cos(angle),
              y: 50 * Math.sin(angle)
            })
          }
          shape = new fabric.Polygon(pentPoints, {
            left: centerX,
            top: centerY,
            originX: 'center',
            originY: 'center',
            fill: randomColor,
            stroke: 'rgba(0,0,0,0.1)',
            strokeWidth: 2,
            selectable: true,
            hasControls: true,
            hasBorders: true
          })
          break

        case 'diamond':
          const diamondPath = 'M 0 -50 L 50 0 L 0 50 L -50 0 Z'
          shape = new fabric.Path(diamondPath, {
            left: centerX,
            top: centerY,
            originX: 'center',
            originY: 'center',
            fill: randomColor,
            stroke: 'rgba(0,0,0,0.1)',
            strokeWidth: 2,
            selectable: true,
            hasControls: true,
            hasBorders: true
          })
          break

        case 'heart':
          const heartPath = 'M 0 20 C -20 -10, -50 0, -30 30 L 0 50 L 30 30 C 50 0, 20 -10, 0 20 Z'
          shape = new fabric.Path(heartPath, {
            left: centerX,
            top: centerY,
            originX: 'center',
            originY: 'center',
            fill: randomColor,
            stroke: 'rgba(0,0,0,0.1)',
            strokeWidth: 2,
            selectable: true,
            hasControls: true,
            hasBorders: true
          })
          break

        default:
          console.error('Unknown shape type:', shapeType)
          return
      }

      canvas.add(shape)
      canvas.setActiveObject(shape)
      canvas.renderAll()

    } catch (error) {
      console.error('Failed to add shape:', error)
    }
  }

  const shapes = [
    { id: 'rectangle', name: 'Rectangle', Icon: Square, bgColor: 'bg-blue-500', hoverColor: 'hover:bg-blue-600' },
    { id: 'circle', name: 'Circle', Icon: CircleIcon, bgColor: 'bg-red-500', hoverColor: 'hover:bg-destructive' },
    { id: 'triangle', name: 'Triangle', Icon: TriangleIcon, bgColor: 'bg-green-500', hoverColor: 'hover:bg-green-600' },
    { id: 'ellipse', name: 'Ellipse', icon: '⬭', bgColor: 'bg-cyan-500', hoverColor: 'hover:bg-cyan-600' },
    { id: 'line', name: 'Line', Icon: Minus, bgColor: 'bg-primary', hoverColor: 'hover:bg-primary' },
    { id: 'arrow', name: 'Arrow', Icon: ArrowRight, bgColor: 'bg-purple-500', hoverColor: 'hover:bg-purple-600' },
    { id: 'star', name: 'Star', Icon: Star, bgColor: 'bg-pink-500', hoverColor: 'hover:bg-pink-600' },
    { id: 'hexagon', name: 'Hexagon', Icon: Hexagon, bgColor: 'bg-indigo-500', hoverColor: 'hover:bg-indigo-600' },
    { id: 'pentagon', name: 'Pentagon', Icon: Pentagon, bgColor: 'bg-teal-500', hoverColor: 'hover:bg-teal-600' },
    { id: 'diamond', name: 'Diamond', Icon: Diamond, bgColor: 'bg-violet-500', hoverColor: 'hover:bg-violet-600' },
    { id: 'heart', name: 'Heart', Icon: Heart, bgColor: 'bg-rose-500', hoverColor: 'hover:bg-rose-600' },
  ]

  const socialMediaIcons = [
    { id: 'facebook', name: 'Facebook', icon: 'logos:facebook' },
    { id: 'instagram', name: 'Instagram', icon: 'skill-icons:instagram' },
    { id: 'twitter', name: 'Twitter', icon: 'logos:twitter' },
    { id: 'youtube', name: 'YouTube', icon: 'logos:youtube-icon' },
    { id: 'linkedin', name: 'LinkedIn', icon: 'logos:linkedin-icon' },
    { id: 'tiktok', name: 'TikTok', icon: 'logos:tiktok-icon' },
    { id: 'whatsapp', name: 'WhatsApp', icon: 'logos:whatsapp-icon' },
    { id: 'telegram', name: 'Telegram', icon: 'logos:telegram' },
    { id: 'discord', name: 'Discord', icon: 'logos:discord-icon' },
    { id: 'slack', name: 'Slack', icon: 'logos:slack-icon' },
    { id: 'reddit', name: 'Reddit', icon: 'logos:reddit-icon' },
    { id: 'pinterest', name: 'Pinterest', icon: 'logos:pinterest' },
    { id: 'twitch', name: 'Twitch', icon: 'logos:twitch' },
    { id: 'messenger', name: 'Messenger', icon: 'logos:messenger' },
    { id: 'x', name: 'X (Twitter)', icon: 'ri:twitter-x-fill' },
    { id: 'threads', name: 'Threads', icon: 'simple-icons:threads' },
  ]

  const techIcons = [
    { id: 'react', name: 'React', icon: 'logos:react' },
    { id: 'vue', name: 'Vue', icon: 'logos:vue' },
    { id: 'angular', name: 'Angular', icon: 'logos:angular-icon' },
    { id: 'nodejs', name: 'Node.js', icon: 'logos:nodejs-icon' },
    { id: 'python', name: 'Python', icon: 'logos:python' },
    { id: 'javascript', name: 'JavaScript', icon: 'logos:javascript' },
    { id: 'typescript', name: 'TypeScript', icon: 'logos:typescript-icon' },
    { id: 'java', name: 'Java', icon: 'logos:java' },
    { id: 'php', name: 'PHP', icon: 'logos:php' },
    { id: 'ruby', name: 'Ruby', icon: 'logos:ruby' },
    { id: 'go', name: 'Go', icon: 'logos:go' },
    { id: 'rust', name: 'Rust', icon: 'logos:rust' },
    { id: 'swift', name: 'Swift', icon: 'logos:swift' },
    { id: 'kotlin', name: 'Kotlin', icon: 'logos:kotlin-icon' },
    { id: 'html', name: 'HTML', icon: 'vscode-icons:file-type-html' },
    { id: 'css', name: 'CSS', icon: 'vscode-icons:file-type-css' },
    { id: 'sass', name: 'Sass', icon: 'logos:sass' },
    { id: 'tailwind', name: 'Tailwind', icon: 'logos:tailwindcss-icon' },
  ]

  const toolsIcons = [
    { id: 'vscode', name: 'VS Code', icon: 'logos:visual-studio-code' },
    { id: 'figma', name: 'Figma', icon: 'logos:figma' },
    { id: 'github', name: 'GitHub', icon: 'logos:github-icon' },
    { id: 'gitlab', name: 'GitLab', icon: 'logos:gitlab' },
    { id: 'docker', name: 'Docker', icon: 'logos:docker-icon' },
    { id: 'kubernetes', name: 'Kubernetes', icon: 'logos:kubernetes' },
    { id: 'aws', name: 'AWS', icon: 'logos:aws' },
    { id: 'firebase', name: 'Firebase', icon: 'logos:firebase' },
    { id: 'mongodb', name: 'MongoDB', icon: 'logos:mongodb-icon' },
    { id: 'postgresql', name: 'PostgreSQL', icon: 'logos:postgresql' },
    { id: 'mysql', name: 'MySQL', icon: 'logos:mysql' },
    { id: 'redis', name: 'Redis', icon: 'logos:redis' },
    { id: 'git', name: 'Git', icon: 'logos:git-icon' },
    { id: 'npm', name: 'NPM', icon: 'logos:npm-icon' },
  ]

  const brandIcons = [
    { id: 'google', name: 'Google', icon: 'logos:google-icon' },
    { id: 'apple', name: 'Apple', icon: 'logos:apple' },
    { id: 'microsoft', name: 'Microsoft', icon: 'logos:microsoft-icon' },
    { id: 'netflix', name: 'Netflix', icon: 'logos:netflix-icon' },
    { id: 'spotify', name: 'Spotify', icon: 'logos:spotify-icon' },
    { id: 'airbnb', name: 'Airbnb', icon: 'logos:airbnb' },
    { id: 'dropbox', name: 'Dropbox', icon: 'logos:dropbox' },
    { id: 'shopify', name: 'Shopify', icon: 'logos:shopify' },
    { id: 'stripe', name: 'Stripe', icon: 'logos:stripe' },
    { id: 'paypal', name: 'PayPal', icon: 'logos:paypal' },
    { id: 'visa', name: 'Visa', icon: 'logos:visa' },
    { id: 'mastercard', name: 'Mastercard', icon: 'logos:mastercard' },
    { id: 'coca-cola', name: 'Coca-Cola', icon: 'simple-icons:cocacola' },
    { id: 'mcdonalds', name: "McDonald's", icon: 'simple-icons:mcdonalds' },
  ]

  const browserIcons = [
    { id: 'chrome', name: 'Chrome', icon: 'logos:chrome' },
    { id: 'firefox', name: 'Firefox', icon: 'logos:firefox' },
    { id: 'safari', name: 'Safari', icon: 'logos:safari' },
    { id: 'edge', name: 'Edge', icon: 'logos:microsoft-edge' },
    { id: 'opera', name: 'Opera', icon: 'logos:opera' },
  ]

  const designIcons = [
    { id: 'photoshop', name: 'Photoshop', icon: 'logos:adobe-photoshop' },
    { id: 'illustrator', name: 'Illustrator', icon: 'logos:adobe-illustrator' },
    { id: 'xd', name: 'Adobe XD', icon: 'logos:adobe-xd' },
    { id: 'sketch', name: 'Sketch', icon: 'logos:sketch' },
    { id: 'invision', name: 'InVision', icon: 'logos:invision' },
    { id: 'aftereffects', name: 'After Effects', icon: 'logos:adobe-after-effects' },
  ]

  const emojiIcons = [
    { id: 'fire', name: 'Fire', icon: 'noto:fire' },
    { id: 'star', name: 'Star', icon: 'noto:star' },
    { id: 'heart', name: 'Heart', icon: 'noto:red-heart' },
    { id: 'thumbs', name: 'Thumbs Up', icon: 'noto:thumbs-up' },
    { id: 'clap', name: 'Clap', icon: 'noto:clapping-hands' },
    { id: 'rocket', name: 'Rocket', icon: 'noto:rocket' },
    { id: 'party', name: 'Party', icon: 'noto:party-popper' },
    { id: 'crown', name: 'Crown', icon: 'noto:crown' },
    { id: 'trophy', name: 'Trophy', icon: 'noto:trophy' },
    { id: 'medal', name: 'Medal', icon: 'noto:sports-medal' },
    { id: 'gift', name: 'Gift', icon: 'noto:wrapped-gift' },
    { id: 'balloon', name: 'Balloon', icon: 'noto:balloon' },
    { id: 'pizza', name: 'Pizza', icon: 'noto:pizza' },
    { id: 'burger', name: 'Burger', icon: 'noto:hamburger' },
    { id: 'coffee', name: 'Coffee', icon: 'noto:hot-beverage' },
    { id: 'cake', name: 'Cake', icon: 'noto:shortcake' },
    { id: 'icecream', name: 'Ice Cream', icon: 'noto:ice-cream' },
    { id: 'donut', name: 'Donut', icon: 'noto:doughnut' },
    { id: 'rainbow', name: 'Rainbow', icon: 'noto:rainbow' },
    { id: 'sun', name: 'Sun', icon: 'noto:sun' },
    { id: 'moon', name: 'Moon', icon: 'noto:crescent-moon' },
    { id: 'lightning', name: 'Lightning', icon: 'noto:high-voltage' },
    { id: 'snowflake', name: 'Snowflake', icon: 'noto:snowflake' },
    { id: 'flower', name: 'Flower', icon: 'noto:cherry-blossom' },
    { id: 'tree', name: 'Tree', icon: 'noto:evergreen-tree' },
    { id: 'earth', name: 'Earth', icon: 'noto:globe-showing-americas' },
    { id: 'money', name: 'Money', icon: 'noto:money-bag' },
    { id: 'gem', name: 'Gem', icon: 'noto:gem-stone' },
    { id: 'bell', name: 'Bell', icon: 'noto:bell' },
    { id: 'megaphone', name: 'Megaphone', icon: 'noto:megaphone' },
  ]

  const allIcons = [
    ...socialMediaIcons,
    ...techIcons,
    ...toolsIcons,
    ...brandIcons,
    ...browserIcons,
    ...designIcons,
    ...emojiIcons
  ]

  const displayedIcons = showAllIcons ? allIcons : allIcons.slice(0, 24)

  return (
    <div className="p-4 space-y-6 h-full overflow-y-auto">
      {}
      <div>
        <h3 className="font-semibold text-slate-800 mb-3 text-sm">Shapes</h3>
        <div className="grid grid-cols-2 gap-3">
          {shapes.map((shape) => (
            <button
              key={shape.id}
              className="group p-3 bg-white rounded-xl hover:shadow-lg transition-all duration-200 border-2 border-slate-200 hover:border-slate-300 active:scale-95"
              onClick={() => addShape(shape.id)}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className={`w-12 h-12 rounded-lg ${shape.bgColor} ${shape.hoverColor} flex items-center justify-center text-white transition-colors shadow-md`}>
                  {shape.Icon ? (
                    <shape.Icon className="w-6 h-6" />
                  ) : (
                    <span className="text-2xl">{shape.icon}</span>
                  )}
                </div>
                <div className="text-xs text-slate-700 font-medium">{shape.name}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-slate-800 text-sm">Colorful Icons</h3>
          <span className="text-xs text-muted-foreground font-medium">{allIcons.length} icons</span>
        </div>

        {}
        <div className="grid grid-cols-4 gap-2">
          {displayedIcons.map((iconData) => (
            <button
              key={iconData.id}
              data-icon={iconData.id}
              className="group relative p-3 bg-white rounded-lg hover:shadow-lg transition-all duration-200 border-2 border-slate-200 hover:border-slate-300 active:scale-95 flex flex-col items-center justify-center space-y-1"
              onClick={() => addIcon(iconData)}
              title={iconData.name}
            >
              <Icon icon={iconData.icon} className="w-8 h-8" />
              <span className="text-[9px] text-muted-foreground font-medium text-center line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {iconData.name}
              </span>
            </button>
          ))}
        </div>

        {}
        {!showAllIcons && (
          <button
            onClick={() => setShowAllIcons(true)}
            className="w-full mt-3 py-2.5 text-sm text-primary hover:text-primary/80 font-semibold border-2 border-border hover:border-border/50 rounded-lg transition-colors hover:bg-card"
          >
            View All {allIcons.length} Icons
          </button>
        )}

        {showAllIcons && (
          <button
            onClick={() => setShowAllIcons(false)}
            className="w-full mt-3 py-2.5 text-sm text-muted-foreground hover:text-slate-700 font-semibold border-2 border-slate-200 hover:border-slate-300 rounded-lg transition-colors hover:bg-slate-50"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  )
}