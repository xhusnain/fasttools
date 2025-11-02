#!/usr/bin/env python3
import re
import os
from pathlib import Path

# Color mappings
COLOR_MAPPINGS = {
    'purple': 'foreground',
    'blue': 'foreground',
    'cyan': 'foreground',
    'red': 'foreground',
    'yellow': 'foreground',
    'pink': 'foreground',
    'orange': 'foreground',
    'green': 'heading-accent'  # Keep green for h3 headings
}

EXCLUDED_DIRS = ['app/api']

def should_exclude_file(filepath):
    """Check if file should be excluded"""
    filepath_str = str(filepath)
    if any(excluded in filepath_str for excluded in EXCLUDED_DIRS):
        return True
    return False

def fix_colors_in_content(content):
    """Fix color classes in file content"""
    # Pattern to match text-color-XXX dark:text-color-XXX
    for old_color, new_suffix in COLOR_MAPPINGS.items():
        # Match patterns like: text-purple-600 dark:text-purple-400
        pattern = rf'text-{old_color}-(\d+)(\s+dark:text-{old_color}-\d+)?'
        
        def replace_func(match):
            return f'text-{new_suffix}'
        
        content = re.sub(pattern, replace_func, content)
    
    return content

def process_file(filepath):
    """Process a single file"""
    if should_exclude_file(filepath):
        return False
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        content = fix_colors_in_content(content)
        
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False
    
    return False

def main():
    """Main function to process all app files"""
    app_dir = Path('app')
    
    if not app_dir.exists():
        print("App directory not found!")
        return
    
    files_fixed = 0
    for tsx_file in app_dir.rglob('*.tsx'):
        if process_file(tsx_file):
            files_fixed += 1
    
    print(f"Fixed colors in {files_fixed} app files")

if __name__ == '__main__':
    main()



