"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Download, Plus, Trash2, Printer, FileText, Palette, Save, Upload, Calendar } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"
import { currencies, languages, getCurrencySymbol } from "./countries-list"

interface InvoiceItem {
  id: string
  description: string
  quantity: number
  rate: number
  taxRate: number // Tax rate for this specific item (0-100)
}

export function InvoiceGenerator() {
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [businessName, setBusinessName] = useState("Your Company")
  const [businessEmail, setBusinessEmail] = useState("")
  const [businessAddress, setBusinessAddress] = useState("Company's Address")
  const [businessCity, setBusinessCity] = useState("City, State Zip")
  const [businessCountry, setBusinessCountry] = useState("U.S.A.")
  const [clientName, setClientName] = useState("Your Client's Company")
  const [clientEmail, setClientEmail] = useState("")
  const [clientAddress, setClientAddress] = useState("Client's Address")
  const [clientCity, setClientCity] = useState("City, State Zip")
  const [clientCountry, setClientCountry] = useState("U.S.A.")
  const [invoiceNumber, setInvoiceNumber] = useState("INV-12")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: "1", description: "Brochure Design", quantity: 2, rate: 100, taxRate: 0 },
    { id: "2", description: "Enter item name/description", quantity: 1, rate: 0, taxRate: 0 },
    { id: "3", description: "Enter item name/description", quantity: 1, rate: 0, taxRate: 0 }
  ])
  const [selectedTheme, setSelectedTheme] = useState("red")
  const [selectedTemplate, setSelectedTemplate] = useState("standard")
  const [logoUrl, setLogoUrl] = useState("")
  const [notes, setNotes] = useState("Thank you for your business! We appreciate your trust in our services.")
  const [terms, setTerms] = useState("Payment is due within 30 days of invoice date. Late payments may incur additional fees.")
  const [currency, setCurrency] = useState("USD")
  const [language, setLanguage] = useState("en")
  const [taxRate, setTaxRate] = useState(0) // Tax rate as percentage (0-100)
  const [discount, setDiscount] = useState(0) // Discount as percentage (0-100)

  // Simple translation system with top 15 languages
  const translations: Record<string, Record<string, string>> = {
    en: {
      'invoice.companyName': 'Enter Company Name',
      'invoice.invoiceNumber': '#',
      'invoice.date': 'Date',
      'invoice.dueDate': 'Due Date',
      'invoice.items.description': 'Description',
      'invoice.items.quantity': 'Qty',
      'invoice.items.rate': 'Rate',
      'invoice.items.amount': 'Amount',
      'invoice.items.action': 'Action',
      'invoice.items.addItem': 'Add Line Item',
      'invoice.totals.subtotal': 'Subtotal',
      'invoice.totals.tax': 'Tax',
      'invoice.totals.total': 'Total',
      'invoice.totals.discount': 'Discount',
      'invoice.totals.taxRate': 'Tax Rate (%)',
      'invoice.totals.discountRate': 'Discount (%)',
      'invoice.notes': 'Notes',
      'invoice.terms': 'Terms & Conditions',
      'invoice.controls.theme': 'Theme',
      'invoice.controls.currency': 'Currency',
      'invoice.controls.language': 'Language',
      'invoice.controls.download': 'Download PDF',
      'invoice.controls.print': 'Print Invoice',
      'invoice.placeholders.itemDescription': 'Enter item name/description',
      'invoice.sections.yourCompany': 'Your Company',
      'invoice.sections.billTo': 'Bill To:',
      'invoice.pdf.from': 'From:',
      'invoice.pdf.notes': 'Notes:',
      'invoice.pdf.terms': 'Terms & Conditions:'
    },
    fr: {
      'invoice.companyName': 'Nom de l\'entreprise',
      'invoice.invoiceNumber': '#',
      'invoice.date': 'Date',
      'invoice.dueDate': 'Date d\'échéance',
      'invoice.items.description': 'Description',
      'invoice.items.quantity': 'Qté',
      'invoice.items.rate': 'Taux',
      'invoice.items.amount': 'Montant',
      'invoice.items.action': 'Action',
      'invoice.items.addItem': 'Ajouter un article',
      'invoice.totals.subtotal': 'Sous-total',
      'invoice.totals.tax': 'Taxe',
      'invoice.totals.total': 'Total',
      'invoice.totals.discount': 'Remise',
      'invoice.totals.taxRate': 'Taux de taxe (%)',
      'invoice.totals.discountRate': 'Remise (%)',
      'invoice.notes': 'Notes',
      'invoice.terms': 'Termes et conditions',
      'invoice.controls.theme': 'Thème',
      'invoice.controls.currency': 'Devise',
      'invoice.controls.language': 'Langue',
      'invoice.controls.download': 'Télécharger PDF',
      'invoice.controls.print': 'Imprimer facture',
      'invoice.placeholders.itemDescription': 'Entrez le nom/description de l\'article',
      'invoice.sections.yourCompany': 'Votre entreprise',
      'invoice.sections.billTo': 'Facturer à:',
      'invoice.pdf.from': 'De:',
      'invoice.pdf.notes': 'Notes:',
      'invoice.pdf.terms': 'Termes et conditions:'
    },
    es: {
      'invoice.companyName': 'Nombre de la empresa',
      'invoice.invoiceNumber': '#',
      'invoice.date': 'Fecha',
      'invoice.dueDate': 'Fecha de vencimiento',
      'invoice.items.description': 'Descripción',
      'invoice.items.quantity': 'Cant',
      'invoice.items.rate': 'Tarifa',
      'invoice.items.amount': 'Importe',
      'invoice.items.action': 'Acción',
      'invoice.items.addItem': 'Agregar artículo',
      'invoice.totals.subtotal': 'Subtotal',
      'invoice.totals.tax': 'Impuesto',
      'invoice.totals.total': 'Total',
      'invoice.totals.discount': 'Descuento',
      'invoice.totals.taxRate': 'Tasa de impuesto (%)',
      'invoice.totals.discountRate': 'Descuento (%)',
      'invoice.notes': 'Notas',
      'invoice.terms': 'Términos y condiciones',
      'invoice.controls.theme': 'Tema',
      'invoice.controls.currency': 'Moneda',
      'invoice.controls.language': 'Idioma',
      'invoice.controls.download': 'Descargar PDF',
      'invoice.controls.print': 'Imprimir factura',
      'invoice.placeholders.itemDescription': 'Ingrese nombre/descripción del artículo',
      'invoice.sections.yourCompany': 'Su empresa',
      'invoice.sections.billTo': 'Facturar a:',
      'invoice.pdf.from': 'De:',
      'invoice.pdf.notes': 'Notas:',
      'invoice.pdf.terms': 'Términos y condiciones:'
    },
    de: {
      'invoice.companyName': 'Firmenname',
      'invoice.invoiceNumber': '#',
      'invoice.date': 'Datum',
      'invoice.dueDate': 'Fälligkeitsdatum',
      'invoice.items.description': 'Beschreibung',
      'invoice.items.quantity': 'Menge',
      'invoice.items.rate': 'Rate',
      'invoice.items.amount': 'Betrag',
      'invoice.items.action': 'Aktion',
      'invoice.items.addItem': 'Artikel hinzufügen',
      'invoice.totals.subtotal': 'Zwischensumme',
      'invoice.totals.tax': 'Steuer',
      'invoice.totals.total': 'Gesamt',
      'invoice.totals.discount': 'Rabatt',
      'invoice.totals.taxRate': 'Steuersatz (%)',
      'invoice.totals.discountRate': 'Rabatt (%)',
      'invoice.notes': 'Notizen',
      'invoice.terms': 'Geschäftsbedingungen',
      'invoice.controls.theme': 'Thema',
      'invoice.controls.currency': 'Währung',
      'invoice.controls.language': 'Sprache',
      'invoice.controls.download': 'PDF herunterladen',
      'invoice.controls.print': 'Rechnung drucken',
      'invoice.placeholders.itemDescription': 'Artikelname/Beschreibung eingeben',
      'invoice.sections.yourCompany': 'Ihr Unternehmen',
      'invoice.sections.billTo': 'Rechnung an:',
      'invoice.pdf.from': 'Von:',
      'invoice.pdf.notes': 'Notizen:',
      'invoice.pdf.terms': 'Geschäftsbedingungen:'
    },
    zh: {
      'invoice.companyName': '公司名称',
      'invoice.invoiceNumber': '#',
      'invoice.date': '日期',
      'invoice.dueDate': '到期日期',
      'invoice.items.description': '描述',
      'invoice.items.quantity': '数量',
      'invoice.items.rate': '费率',
      'invoice.items.amount': '金额',
      'invoice.items.action': '操作',
      'invoice.items.addItem': '添加项目',
      'invoice.totals.subtotal': '小计',
      'invoice.totals.tax': '税费',
      'invoice.totals.total': '总计',
      'invoice.totals.discount': '折扣',
      'invoice.totals.taxRate': '税率 (%)',
      'invoice.totals.discountRate': '折扣 (%)',
      'invoice.notes': '备注',
      'invoice.terms': '条款和条件',
      'invoice.controls.theme': '主题',
      'invoice.controls.currency': '货币',
      'invoice.controls.language': '语言',
      'invoice.controls.download': '下载PDF',
      'invoice.controls.print': '打印发票',
      'invoice.placeholders.itemDescription': '输入项目名称/描述',
      'invoice.sections.yourCompany': '您的公司',
      'invoice.sections.billTo': '账单发送至:',
      'invoice.pdf.from': '来自:',
      'invoice.pdf.notes': '备注:',
      'invoice.pdf.terms': '条款和条件:'
    },
    ar: {
      'invoice.companyName': 'اسم الشركة',
      'invoice.invoiceNumber': '#',
      'invoice.date': 'التاريخ',
      'invoice.dueDate': 'تاريخ الاستحقاق',
      'invoice.items.description': 'الوصف',
      'invoice.items.quantity': 'الكمية',
      'invoice.items.rate': 'المعدل',
      'invoice.items.amount': 'المبلغ',
      'invoice.items.action': 'الإجراء',
      'invoice.items.addItem': 'إضافة عنصر',
      'invoice.totals.subtotal': 'المجموع الفرعي',
      'invoice.totals.tax': 'الضريبة',
      'invoice.totals.total': 'المجموع',
      'invoice.totals.discount': 'الخصم',
      'invoice.totals.taxRate': 'معدل الضريبة (%)',
      'invoice.totals.discountRate': 'الخصم (%)',
      'invoice.notes': 'ملاحظات',
      'invoice.terms': 'الشروط والأحكام',
      'invoice.controls.theme': 'السمة',
      'invoice.controls.currency': 'العملة',
      'invoice.controls.language': 'اللغة',
      'invoice.controls.download': 'تحميل PDF',
      'invoice.controls.print': 'طباعة الفاتورة',
      'invoice.placeholders.itemDescription': 'أدخل اسم/وصف العنصر',
      'invoice.sections.yourCompany': 'شركتك',
      'invoice.sections.billTo': 'الفاتورة إلى:',
      'invoice.pdf.from': 'من:',
      'invoice.pdf.notes': 'ملاحظات:',
      'invoice.pdf.terms': 'الشروط والأحكام:'
    },
    pt: {
      'invoice.companyName': 'Nome da empresa',
      'invoice.invoiceNumber': '#',
      'invoice.date': 'Data',
      'invoice.dueDate': 'Data de vencimento',
      'invoice.items.description': 'Descrição',
      'invoice.items.quantity': 'Qtd',
      'invoice.items.rate': 'Taxa',
      'invoice.items.amount': 'Valor',
      'invoice.items.action': 'Ação',
      'invoice.items.addItem': 'Adicionar item',
      'invoice.totals.subtotal': 'Subtotal',
      'invoice.totals.tax': 'Imposto',
      'invoice.totals.total': 'Total',
      'invoice.totals.discount': 'Desconto',
      'invoice.totals.taxRate': 'Taxa de imposto (%)',
      'invoice.totals.discountRate': 'Desconto (%)',
      'invoice.notes': 'Notas',
      'invoice.terms': 'Termos e condições',
      'invoice.controls.theme': 'Tema',
      'invoice.controls.currency': 'Moeda',
      'invoice.controls.language': 'Idioma',
      'invoice.controls.download': 'Baixar PDF',
      'invoice.controls.print': 'Imprimir fatura',
      'invoice.placeholders.itemDescription': 'Digite nome/descrição do item',
      'invoice.sections.yourCompany': 'Sua empresa',
      'invoice.sections.billTo': 'Faturar para:',
      'invoice.pdf.from': 'De:',
      'invoice.pdf.notes': 'Notas:',
      'invoice.pdf.terms': 'Termos e condições:'
    },
    ru: {
      'invoice.companyName': 'Название компании',
      'invoice.invoiceNumber': '#',
      'invoice.date': 'Дата',
      'invoice.dueDate': 'Срок оплаты',
      'invoice.items.description': 'Описание',
      'invoice.items.quantity': 'Кол-во',
      'invoice.items.rate': 'Ставка',
      'invoice.items.amount': 'Сумма',
      'invoice.items.action': 'Действие',
      'invoice.items.addItem': 'Добавить позицию',
      'invoice.totals.subtotal': 'Подытог',
      'invoice.totals.tax': 'Налог',
      'invoice.totals.total': 'Итого',
      'invoice.totals.discount': 'Скидка',
      'invoice.totals.taxRate': 'Налоговая ставка (%)',
      'invoice.totals.discountRate': 'Скидка (%)',
      'invoice.notes': 'Примечания',
      'invoice.terms': 'Условия и положения',
      'invoice.controls.theme': 'Тема',
      'invoice.controls.currency': 'Валюта',
      'invoice.controls.language': 'Язык',
      'invoice.controls.download': 'Скачать PDF',
      'invoice.controls.print': 'Печать счета',
      'invoice.placeholders.itemDescription': 'Введите название/описание товара',
      'invoice.sections.yourCompany': 'Ваша компания',
      'invoice.sections.billTo': 'Счет для:',
      'invoice.pdf.from': 'От:',
      'invoice.pdf.notes': 'Примечания:',
      'invoice.pdf.terms': 'Условия и положения:'
    },
    ja: {
      'invoice.companyName': '会社名',
      'invoice.invoiceNumber': '#',
      'invoice.date': '日付',
      'invoice.dueDate': '支払期日',
      'invoice.items.description': '説明',
      'invoice.items.quantity': '数量',
      'invoice.items.rate': '単価',
      'invoice.items.amount': '金額',
      'invoice.items.action': '操作',
      'invoice.items.addItem': '項目を追加',
      'invoice.totals.subtotal': '小計',
      'invoice.totals.tax': '税金',
      'invoice.totals.total': '合計',
      'invoice.totals.discount': '割引',
      'invoice.totals.taxRate': '税率 (%)',
      'invoice.totals.discountRate': '割引 (%)',
      'invoice.notes': '備考',
      'invoice.terms': '利用規約',
      'invoice.controls.theme': 'テーマ',
      'invoice.controls.currency': '通貨',
      'invoice.controls.language': '言語',
      'invoice.controls.download': 'PDFダウンロード',
      'invoice.controls.print': '請求書印刷',
      'invoice.placeholders.itemDescription': '項目名/説明を入力',
      'invoice.sections.yourCompany': 'あなたの会社',
      'invoice.sections.billTo': '請求先:',
      'invoice.pdf.from': '差出人:',
      'invoice.pdf.notes': '備考:',
      'invoice.pdf.terms': '利用規約:'
    },
    ko: {
      'invoice.companyName': '회사명',
      'invoice.invoiceNumber': '#',
      'invoice.date': '날짜',
      'invoice.dueDate': '만료일',
      'invoice.items.description': '설명',
      'invoice.items.quantity': '수량',
      'invoice.items.rate': '요율',
      'invoice.items.amount': '금액',
      'invoice.items.action': '작업',
      'invoice.items.addItem': '항목 추가',
      'invoice.totals.subtotal': '소계',
      'invoice.totals.tax': '세금',
      'invoice.totals.total': '총계',
      'invoice.totals.discount': '할인',
      'invoice.totals.taxRate': '세율 (%)',
      'invoice.totals.discountRate': '할인율 (%)',
      'invoice.notes': '참고사항',
      'invoice.terms': '약관 및 조건',
      'invoice.controls.theme': '테마',
      'invoice.controls.currency': '통화',
      'invoice.controls.language': '언어',
      'invoice.controls.download': 'PDF 다운로드',
      'invoice.controls.print': '청구서 인쇄',
      'invoice.placeholders.itemDescription': '항목 이름/설명 입력',
      'invoice.sections.yourCompany': '귀하의 회사',
      'invoice.sections.billTo': '청구 대상:',
      'invoice.pdf.from': '발신자:',
      'invoice.pdf.notes': '참고사항:',
      'invoice.pdf.terms': '약관 및 조건:'
    },
    hi: {
      'invoice.companyName': 'कंपनी का नाम',
      'invoice.invoiceNumber': '#',
      'invoice.date': 'तारीख',
      'invoice.dueDate': 'देय तिथि',
      'invoice.items.description': 'विवरण',
      'invoice.items.quantity': 'मात्रा',
      'invoice.items.rate': 'दर',
      'invoice.items.amount': 'राशि',
      'invoice.items.action': 'कार्य',
      'invoice.items.addItem': 'आइटम जोड़ें',
      'invoice.totals.subtotal': 'उप-योग',
      'invoice.totals.tax': 'कर',
      'invoice.totals.total': 'कुल',
      'invoice.totals.discount': 'छूट',
      'invoice.totals.taxRate': 'कर दर (%)',
      'invoice.totals.discountRate': 'छूट (%)',
      'invoice.notes': 'नोट्स',
      'invoice.terms': 'नियम और शर्तें',
      'invoice.controls.theme': 'थीम',
      'invoice.controls.currency': 'मुद्रा',
      'invoice.controls.language': 'भाषा',
      'invoice.controls.download': 'PDF डाउनलोड',
      'invoice.controls.print': 'चालान प्रिंट करें',
      'invoice.placeholders.itemDescription': 'आइटम नाम/विवरण दर्ज करें',
      'invoice.sections.yourCompany': 'आपकी कंपनी',
      'invoice.sections.billTo': 'बिल टू:',
      'invoice.pdf.from': 'से:',
      'invoice.pdf.notes': 'नोट्स:',
      'invoice.pdf.terms': 'नियम और शर्तें:'
    },
    it: {
      'invoice.companyName': 'Nome azienda',
      'invoice.invoiceNumber': '#',
      'invoice.date': 'Data',
      'invoice.dueDate': 'Data scadenza',
      'invoice.items.description': 'Descrizione',
      'invoice.items.quantity': 'Qtà',
      'invoice.items.rate': 'Tariffa',
      'invoice.items.amount': 'Importo',
      'invoice.items.action': 'Azione',
      'invoice.items.addItem': 'Aggiungi articolo',
      'invoice.totals.subtotal': 'Subtotale',
      'invoice.totals.tax': 'Tassa',
      'invoice.totals.total': 'Totale',
      'invoice.totals.discount': 'Sconto',
      'invoice.totals.taxRate': 'Aliquota fiscale (%)',
      'invoice.totals.discountRate': 'Sconto (%)',
      'invoice.notes': 'Note',
      'invoice.terms': 'Termini e condizioni',
      'invoice.controls.theme': 'Tema',
      'invoice.controls.currency': 'Valuta',
      'invoice.controls.language': 'Lingua',
      'invoice.controls.download': 'Scarica PDF',
      'invoice.controls.print': 'Stampa fattura',
      'invoice.placeholders.itemDescription': 'Inserisci nome/descrizione articolo',
      'invoice.sections.yourCompany': 'La tua azienda',
      'invoice.sections.billTo': 'Fattura a:',
      'invoice.pdf.from': 'Da:',
      'invoice.pdf.notes': 'Note:',
      'invoice.pdf.terms': 'Termini e condizioni:'
    },
    tr: {
      'invoice.companyName': 'Şirket adı',
      'invoice.invoiceNumber': '#',
      'invoice.date': 'Tarih',
      'invoice.dueDate': 'Vade tarihi',
      'invoice.items.description': 'Açıklama',
      'invoice.items.quantity': 'Miktar',
      'invoice.items.rate': 'Oran',
      'invoice.items.amount': 'Tutar',
      'invoice.items.action': 'İşlem',
      'invoice.items.addItem': 'Öğe ekle',
      'invoice.totals.subtotal': 'Ara toplam',
      'invoice.totals.tax': 'Vergi',
      'invoice.totals.total': 'Toplam',
      'invoice.totals.discount': 'İndirim',
      'invoice.totals.taxRate': 'Vergi oranı (%)',
      'invoice.totals.discountRate': 'İndirim (%)',
      'invoice.notes': 'Notlar',
      'invoice.terms': 'Şartlar ve koşullar',
      'invoice.controls.theme': 'Tema',
      'invoice.controls.currency': 'Para birimi',
      'invoice.controls.language': 'Dil',
      'invoice.controls.download': 'PDF İndir',
      'invoice.controls.print': 'Fatura Yazdır',
      'invoice.placeholders.itemDescription': 'Öğe adı/açıklaması girin',
      'invoice.sections.yourCompany': 'Şirketiniz',
      'invoice.sections.billTo': 'Fatura Edilecek:',
      'invoice.pdf.from': 'Gönderen:',
      'invoice.pdf.notes': 'Notlar:',
      'invoice.pdf.terms': 'Şartlar ve koşullar:'
    },
    pl: {
      'invoice.companyName': 'Nazwa firmy',
      'invoice.invoiceNumber': '#',
      'invoice.date': 'Data',
      'invoice.dueDate': 'Termin płatności',
      'invoice.items.description': 'Opis',
      'invoice.items.quantity': 'Ilość',
      'invoice.items.rate': 'Stawka',
      'invoice.items.amount': 'Kwota',
      'invoice.items.action': 'Akcja',
      'invoice.items.addItem': 'Dodaj pozycję',
      'invoice.totals.subtotal': 'Suma częściowa',
      'invoice.totals.tax': 'Podatek',
      'invoice.totals.total': 'Razem',
      'invoice.totals.discount': 'Rabat',
      'invoice.totals.taxRate': 'Stawka podatkowa (%)',
      'invoice.totals.discountRate': 'Rabat (%)',
      'invoice.notes': 'Uwagi',
      'invoice.terms': 'Warunki i zasady',
      'invoice.controls.theme': 'Motyw',
      'invoice.controls.currency': 'Waluta',
      'invoice.controls.language': 'Język',
      'invoice.controls.download': 'Pobierz PDF',
      'invoice.controls.print': 'Drukuj fakturę',
      'invoice.placeholders.itemDescription': 'Wprowadź nazwę/opis pozycji',
      'invoice.sections.yourCompany': 'Twoja firma',
      'invoice.sections.billTo': 'Faktura dla:',
      'invoice.pdf.from': 'Od:',
      'invoice.pdf.notes': 'Uwagi:',
      'invoice.pdf.terms': 'Warunki i zasady:'
    },
    nl: {
      'invoice.companyName': 'Bedrijfsnaam',
      'invoice.invoiceNumber': '#',
      'invoice.date': 'Datum',
      'invoice.dueDate': 'Vervaldatum',
      'invoice.items.description': 'Beschrijving',
      'invoice.items.quantity': 'Aantal',
      'invoice.items.rate': 'Tarief',
      'invoice.items.amount': 'Bedrag',
      'invoice.items.action': 'Actie',
      'invoice.items.addItem': 'Item toevoegen',
      'invoice.totals.subtotal': 'Subtotaal',
      'invoice.totals.tax': 'Belasting',
      'invoice.totals.total': 'Totaal',
      'invoice.totals.discount': 'Korting',
      'invoice.totals.taxRate': 'Belastingtarief (%)',
      'invoice.totals.discountRate': 'Korting (%)',
      'invoice.notes': 'Opmerkingen',
      'invoice.terms': 'Voorwaarden',
      'invoice.controls.theme': 'Thema',
      'invoice.controls.currency': 'Valuta',
      'invoice.controls.language': 'Taal',
      'invoice.controls.download': 'PDF Downloaden',
      'invoice.controls.print': 'Factuur Afdrukken',
      'invoice.placeholders.itemDescription': 'Voer itemnaam/beschrijving in',
      'invoice.sections.yourCompany': 'Uw bedrijf',
      'invoice.sections.billTo': 'Factuur naar:',
      'invoice.pdf.from': 'Van:',
      'invoice.pdf.notes': 'Opmerkingen:',
      'invoice.pdf.terms': 'Voorwaarden:'
    }
  }

  // Simple translation function
  const t = (key: string) => {
    const langTranslations = translations[language] || translations.en
    return langTranslations[key] || translations.en[key] || key
  }

  const addItem = () => {
    setItems([...items, { id: Date.now().toString(), description: t('invoice.placeholders.itemDescription'), quantity: 1, rate: 0, taxRate: 0 }])
  }

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter((item) => item.id !== id))
    }
  }

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setItems(items.map((item) => (item.id === id ? { ...item, [field]: value } : item)))
  }

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setLogoUrl(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + item.quantity * item.rate, 0)
  }

  const calculateItemTax = (item: InvoiceItem) => {
    return item.quantity * item.rate * (item.taxRate / 100)
  }

  const calculateTotalItemTax = () => {
    return items.reduce((sum, item) => sum + calculateItemTax(item), 0)
  }

  const calculateTax = (subtotal: number) => {
    return subtotal * (taxRate / 100) // Use custom tax rate
  }

  const calculateTotal = () => {
    const subtotal = calculateSubtotal()
    const discountAmount = subtotal * (discount / 100)
    const subtotalAfterDiscount = subtotal - discountAmount
    const itemTaxes = calculateTotalItemTax()
    return subtotalAfterDiscount + itemTaxes
  }

  const generateInvoice = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 800)
  }

  const copyInvoice = () => {
    const invoiceText = `
Invoice #${invoiceNumber}
From: ${businessName}
${businessAddress}, ${businessCity}, ${businessCountry}
To: ${clientName}
${clientAddress}, ${clientCity}, ${clientCountry}
Date: ${invoiceDate}
Due Date: ${dueDate}

Items:
${items.map((item) => `${item.description} - Qty: ${item.quantity} x ${getCurrencySymbol(currency)}${item.rate} = ${getCurrencySymbol(currency)}${(item.quantity * item.rate).toFixed(2)}`).join("\n")}

Subtotal: ${getCurrencySymbol(currency)}${calculateSubtotal().toFixed(2)}
Discount (${discount}%): ${getCurrencySymbol(currency)}${(calculateSubtotal() * (discount / 100)).toFixed(2)}
Tax (Items): ${getCurrencySymbol(currency)}${calculateTotalItemTax().toFixed(2)}
Total: ${getCurrencySymbol(currency)}${calculateTotal().toFixed(2)}
    `.trim()

    navigator.clipboard.writeText(invoiceText)
  }

  const downloadPDF = () => {
    setLoading(true)
    
    // Create a new window for printing/downloading
    const printWindow = window.open('', '_blank')
    if (printWindow) {
      const invoiceHTML = generateInvoiceHTML()
      printWindow.document.write(invoiceHTML)
      printWindow.document.close()
      
      // Wait for content to load then trigger print dialog
      setTimeout(() => {
        printWindow.print()
        setLoading(false)
      }, 500)
    } else {
      setLoading(false)
    }
  }

  const printInvoice = () => {
    const printWindow = window.open('', '_blank')
    if (printWindow) {
      const invoiceHTML = generateInvoiceHTML()
      printWindow.document.write(invoiceHTML)
      printWindow.document.close()
      
      setTimeout(() => {
        printWindow.print()
      }, 500)
    }
  }

  const generateInvoiceHTML = () => {
    const subtotal = calculateSubtotal()
    const itemTaxes = calculateTotalItemTax()
    const total = calculateTotal()
    const currencySymbol = getCurrencySymbol(currency)
    
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Invoice ${invoiceNumber}</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 20px; color: #333; }
        .invoice-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 30px; }
        .invoice-logo { width: 80px; height: 80px; margin-right: 20px; }
        .invoice-title { font-size: 28px; font-weight: bold; color: ${selectedTheme === 'red' ? '#dc2626' : selectedTheme === 'green' ? '#16a34a' : selectedTheme === 'orange' ? '#ea580c' : '#2563eb'}; }
        .company-info { margin-bottom: 20px; }
        .client-info { margin-bottom: 20px; }
        .invoice-details { display: flex; gap: 20px; margin-bottom: 30px; }
        .invoice-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
        .invoice-table th { background-color: ${selectedTheme === 'red' ? '#dc2626' : selectedTheme === 'green' ? '#16a34a' : selectedTheme === 'orange' ? '#ea580c' : '#2563eb'}; color: white; padding: 12px; text-align: left; }
        .invoice-table td { padding: 12px; border-bottom: 1px solid #ddd; }
        .invoice-total { text-align: right; margin-top: 20px; }
        .total-box { background-color: #f8f9fa; padding: 15px; border-radius: 8px; display: inline-block; }
        .notes { margin-top: 30px; }
        @media print { body { margin: 0; } }
      </style>
    </head>
    <body>
      <div class="invoice-header">
        <div style="display: flex; align-items: flex-start;">
          ${logoUrl ? `<img src="${logoUrl}" alt="Company Logo" class="invoice-logo" style="object-fit: contain;" />` : ''}
          <div>
            <h1 class="invoice-title">${companyName || 'INVOICE'}</h1>
          </div>
        </div>
        <div class="invoice-details">
          <div><strong>Invoice #:</strong> ${invoiceNumber}</div>
          <div><strong>Date:</strong> ${invoiceDate}</div>
          <div><strong>Due Date:</strong> ${dueDate}</div>
        </div>
      </div>
      
      <div class="company-info">
        <p><strong>${businessName}</strong><br>
        ${businessAddress}<br>
        ${businessCity}<br>
        ${businessCountry}</p>
      </div>
      
      <div class="client-info">
        <h3>${t('invoice.sections.billTo')}</h3>
        <p><strong>${clientName}</strong><br>
        ${clientAddress}<br>
        ${clientCity}<br>
        ${clientCountry}</p>
      </div>
      
      <table class="invoice-table">
        <thead>
          <tr>
            <th>${t('invoice.items.description')}</th>
            <th>${t('invoice.items.quantity')}</th>
            <th>${t('invoice.items.rate')}</th>
            <th>${t('invoice.items.amount')}</th>
          </tr>
        </thead>
        <tbody>
          ${items.map(item => `
            <tr>
              <td>${item.description}</td>
              <td>${item.quantity}</td>
              <td>${currencySymbol}${item.rate.toFixed(2)}</td>
              <td>${currencySymbol}${(item.quantity * item.rate).toFixed(2)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      
      <div class="invoice-total">
        <div class="total-box">
          <div>Subtotal: ${currencySymbol}${subtotal.toFixed(2)}</div>
          <div>Discount (${discount}%): ${currencySymbol}${(subtotal * (discount / 100)).toFixed(2)}</div>
          <div>Tax (Items): ${currencySymbol}${itemTaxes.toFixed(2)}</div>
          <div style="font-size: 18px; font-weight: bold; margin-top: 10px;">Total: ${currencySymbol}${total.toFixed(2)}</div>
        </div>
      </div>
      
      <div class="notes">
        <h4>${t('invoice.pdf.notes')}</h4>
        <p>${notes}</p>
        <h4>${t('invoice.pdf.terms')}</h4>
        <p>${terms}</p>
      </div>
    </body>
    </html>
    `
  }

  const saveToCloud = () => {
    // Simulate cloud saving functionality
    setLoading(true)
    setTimeout(() => {
      alert('Invoice saved to cloud successfully!')
      setLoading(false)
    }, 1000)
  }

  const subtotal = calculateSubtotal()
  const tax = calculateTax(subtotal)
  const total = calculateTotal()

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
      {/* Main Invoice Preview */}
      <div className="w-full max-w-6xl mx-auto">
        {/* Invoice Preview */}
        <div className="bg-slate-800 border border-slate-600 rounded-lg p-3 sm:p-4 lg:p-6 shadow-sm text-white">
              {/* Header */}
              <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 w-full lg:w-auto">
                  {/* Logo Display */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-slate-700 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-500 flex-shrink-0">
                    {logoUrl ? (
                      <img src={logoUrl} alt="Logo" className="w-full h-full object-contain rounded-lg" />
                    ) : (
                      <div className="text-center">
                        <Upload className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-slate-400 mx-auto mb-1 sm:mb-2" />
                        <span className="text-xs sm:text-sm text-slate-400">Upload Logo</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="hidden"
                      id="logo-upload"
                    />
                    <label htmlFor="logo-upload" className="cursor-pointer">
                      <Button 
                        size="sm" 
                        className="bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 rounded-lg"
                        onClick={(e) => {
                          e.preventDefault()
                          document.getElementById('logo-upload')?.click()
                        }}
                      >
                        Upload
                      </Button>
                    </label>
                    <p className="text-xs text-slate-400 mt-1 sm:mt-2 hidden sm:block">240 x 240 pixels @ 72 DPI<br />Maximum size of 1MB</p>
                    <p className="text-xs text-slate-400 mt-1 sm:hidden">Max 1MB</p>
                  </div>
                </div>
                
                {/* Language Selection */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full lg:w-auto">
                  <span className="text-xs sm:text-sm font-medium text-slate-300">{t('invoice.controls.language')}:</span>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="border border-orange-300 bg-slate-700 text-white rounded-lg px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-full sm:w-auto min-w-0"
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code} className="bg-slate-700">
                        {lang.native} - {lang.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="text-center w-full max-w-xs sm:max-w-sm">
                  <Input
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder={t('invoice.companyName')}
                    className="border border-orange-300 p-2 sm:p-3 text-xl sm:text-2xl lg:text-3xl font-bold text-white bg-transparent text-center placeholder-slate-300 rounded-lg w-full"
                  />
                </div>
              </div>

              {/* Company and Client Info */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6">
                <div>
                  <h3 className="text-sm font-semibold text-slate-300 mb-3">{t('invoice.sections.yourCompany')}</h3>
              <Input
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                    className="border border-orange-300 p-2 text-sm font-medium text-white bg-transparent mb-2 rounded-lg"
                    placeholder="Your Company"
                  />
                  <Input
                    value={businessAddress}
                    onChange={(e) => setBusinessAddress(e.target.value)}
                    className="border border-orange-300 p-2 text-sm text-slate-300 bg-transparent mb-2 rounded-lg"
                    placeholder="Company's Address"
                  />
                  <Input
                    value={businessCity}
                    onChange={(e) => setBusinessCity(e.target.value)}
                    className="border border-orange-300 p-2 text-sm text-slate-300 bg-transparent mb-2 rounded-lg"
                    placeholder="City, State Zip"
                  />
              <Input
                    value={businessCountry}
                    onChange={(e) => setBusinessCountry(e.target.value)}
                    className="border border-orange-300 p-2 text-sm text-slate-300 bg-transparent rounded-lg"
                    placeholder="U.S.A."
              />
            </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-300 mb-3">{t('invoice.sections.billTo')}</h3>
              <Input
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                    className="border border-orange-300 p-2 text-sm font-medium text-white bg-transparent mb-2 rounded-lg"
                    placeholder="Your Client's Company"
                  />
                  <Input
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                    className="border border-orange-300 p-2 text-sm text-slate-300 bg-transparent mb-2 rounded-lg"
                    placeholder="Client's Address"
                  />
                  <Input
                    value={clientCity}
                    onChange={(e) => setClientCity(e.target.value)}
                    className="border border-orange-300 p-2 text-sm text-slate-300 bg-transparent mb-2 rounded-lg"
                    placeholder="City, State Zip"
                  />
              <Input
                    value={clientCountry}
                    onChange={(e) => setClientCountry(e.target.value)}
                    className="border border-orange-300 p-2 text-sm text-slate-300 bg-transparent rounded-lg"
                    placeholder="U.S.A."
                  />
                </div>
            </div>

              {/* Invoice Details */}
              <div className="flex justify-end mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 w-full sm:w-auto">
                  <div className="w-full sm:w-auto">
                    <label className="text-xs sm:text-sm font-semibold text-slate-300">{t('invoice.invoiceNumber')}</label>
              <Input
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
                      className="border border-orange-300 p-1 sm:p-2 text-xs sm:text-sm font-medium text-white bg-transparent rounded-lg w-full"
                      placeholder="INV-12"
              />
            </div>
                  <div className="w-full sm:w-auto">
                    <label className="text-xs sm:text-sm font-semibold text-slate-300">{t('invoice.date')}</label>
                    <div className="flex items-center gap-1 sm:gap-2">
              <Input
                type="date"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
                        className="border border-orange-300 p-1 sm:p-2 text-xs sm:text-sm text-slate-300 bg-transparent rounded-lg w-full"
              />
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400" />
                    </div>
            </div>
                  <div className="w-full sm:w-auto">
                    <label className="text-xs sm:text-sm font-semibold text-slate-300">{t('invoice.dueDate')}</label>
                    <div className="flex items-center gap-1 sm:gap-2">
              <Input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                        className="border border-orange-300 p-1 sm:p-2 text-xs sm:text-sm text-slate-300 bg-transparent rounded-lg w-full"
              />
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400" />
                    </div>
            </div>
            </div>
          </div>

              {/* Items Table */}
              <div className="mb-6 sm:mb-8 overflow-x-auto">
                <table className="w-full border-collapse min-w-[600px]">
                  <thead>
                    <tr 
                      className="text-white"
                      style={{ 
                        backgroundColor: selectedTheme === 'red' ? '#dc2626' : 
                                       selectedTheme === 'blue' ? '#2563eb' : 
                                       selectedTheme === 'green' ? '#16a34a' : 
                                       selectedTheme === 'orange' ? '#ea580c' : 
                                       selectedTheme === 'purple' ? '#9333ea' : '#dc2626'
                      }}
                    >
                      <th className="text-left p-1 sm:p-2 font-semibold text-xs sm:text-sm">{t('invoice.items.description')}</th>
                      <th className="text-center p-1 sm:p-2 font-semibold text-xs sm:text-sm">{t('invoice.items.quantity')}</th>
                      <th className="text-center p-1 sm:p-2 font-semibold text-xs sm:text-sm">{t('invoice.items.rate')}</th>
                      <th className="text-center p-1 sm:p-2 font-semibold text-xs sm:text-sm">{t('invoice.totals.tax')}</th>
                      <th className="text-right p-1 sm:p-2 font-semibold text-xs sm:text-sm">{t('invoice.items.amount')}</th>
                      <th className="text-center p-1 sm:p-2 font-semibold text-xs sm:text-sm">{t('invoice.items.action')}</th>
                    </tr>
                  </thead>
                  <tbody>
          {items.map((item, index) => (
                      <tr key={item.id} className="border-b border-slate-600">
                        <td className="p-1 sm:p-2">
                <Input
                  value={item.description}
                  onChange={(e) => updateItem(item.id, "description", e.target.value)}
                            className="border border-orange-300 p-1 text-xs sm:text-sm text-white bg-transparent w-full rounded-lg"
                            placeholder="Enter item name/description"
                          />
                        </td>
                        <td className="p-1 sm:p-2 text-center">
                <Input
                  type="number"
                            value={item.quantity}
                            onChange={(e) => updateItem(item.id, "quantity", Number(e.target.value) || 1)}
                            className="border border-orange-300 p-1 text-xs sm:text-sm text-white bg-transparent text-center w-16 sm:w-20 rounded-lg"
                  min="1"
                          />
                        </td>
                        <td className="p-1 sm:p-2 text-center">
                <Input
                  type="number"
                            value={item.rate}
                            onChange={(e) => updateItem(item.id, "rate", Number(e.target.value) || 0)}
                            className="border border-orange-300 p-1 text-xs sm:text-sm text-white bg-transparent text-center w-20 sm:w-24 rounded-lg"
                  step="0.01"
                          />
                        </td>
                        <td className="p-1 sm:p-2 text-center">
                          <div className="space-y-2">
                            <Input
                              type="number"
                              value={item.taxRate}
                              onChange={(e) => updateItem(item.id, "taxRate", Number(e.target.value) || 0)}
                              className="border border-orange-300 p-1 text-xs sm:text-sm text-white bg-transparent text-center w-12 sm:w-16 rounded-lg"
                              min="0"
                              max="100"
                              step="0.01"
                            />
                            <span className="text-xs text-slate-400">{getCurrencySymbol(currency)}{calculateItemTax(item).toFixed(2)}</span>
              </div>
                        </td>
                        <td className="p-1 sm:p-2 text-right">
                          <span className="text-xs sm:text-sm font-medium text-white">
                            {getCurrencySymbol(currency)}{(item.quantity * item.rate).toFixed(2)}
                          </span>
                        </td>
                        <td className="p-1 sm:p-2 text-center">
                          {items.length > 1 && (
                            <Button
                              onClick={() => removeItem(item.id)}
                              variant="outline"
                              size="sm"
                              className="h-6 w-6 sm:h-8 sm:w-8 p-0 text-red-400 border-red-400 hover:bg-red-400 hover:text-white bg-transparent"
                            >
                              <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                            </Button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                <Button
                  onClick={addItem}
                  variant="outline"
                  size="sm"
                  className="mt-4 sm:mt-6 text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white bg-transparent text-xs sm:text-sm px-3 sm:px-4 py-2"
                >
                  <Plus className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  {t('invoice.items.addItem')}
                </Button>
              </div>

              {/* Discount Controls */}
              <div className="flex justify-end mb-4 sm:mb-6">
                <div className="w-full sm:w-64">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
                    <label className="text-xs sm:text-sm text-slate-300">{t('invoice.totals.discountRate')}</label>
                    <Input
                      type="number"
                      min="0"
                      max="100"
                      step="0.01"
                      value={discount}
                      onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
                      className="w-16 sm:w-20 h-6 sm:h-8 text-xs sm:text-sm text-center border border-orange-300 p-1 rounded-lg bg-slate-800 text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Totals */}
              <div className="flex justify-end mb-4 sm:mb-6">
                <div className="w-full sm:w-64">
                  <div className="flex justify-between text-xs sm:text-sm mb-2 sm:mb-3">
                    <span className="text-slate-300">{t('invoice.totals.subtotal')}</span>
                    <span className="font-medium text-white">{getCurrencySymbol(currency)}{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm mb-2 sm:mb-3">
                    <span className="text-slate-300">{t('invoice.totals.discount')} ({discount}%)</span>
                    <span className="font-medium text-white">{getCurrencySymbol(currency)}{(subtotal * (discount / 100)).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm mb-2 sm:mb-3">
                    <span className="text-slate-300">{t('invoice.totals.tax')} (Items)</span>
                    <span className="font-medium text-white">{getCurrencySymbol(currency)}{calculateTotalItemTax().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-xl font-bold border-t border-slate-600 pt-2 sm:pt-3">
                    <span className="text-white">{t('invoice.totals.total')}</span>
                    <span className="text-blue-400">{getCurrencySymbol(currency)} {total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Notes and Terms */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6">
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-300 mb-2 sm:mb-3">{t('invoice.notes')}</h4>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="border border-orange-300 p-2 sm:p-3 text-xs sm:text-sm text-slate-300 bg-transparent rounded-lg w-full h-20 sm:h-24 resize-none"
                    placeholder="Enter your notes here..."
                  />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-300 mb-2 sm:mb-3">{t('invoice.terms')}</h4>
                  <textarea
                    value={terms}
                    onChange={(e) => setTerms(e.target.value)}
                    className="border border-orange-300 p-2 sm:p-3 text-xs sm:text-sm text-slate-300 bg-transparent rounded-lg w-full h-20 sm:h-24 resize-none"
                    placeholder="Enter terms and conditions here..."
                  />
              </div>
            </div>

              {/* Controls Section */}
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-600">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4">
                  <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full lg:w-auto">
                    {/* Theme Selection */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                      <span className="text-xs sm:text-sm font-medium text-slate-300">{t('invoice.controls.theme')}:</span>
                      <div className="flex gap-1 sm:gap-2">
                        {[
                          { name: 'red', color: '#dc2626' },
                          { name: 'blue', color: '#2563eb' },
                          { name: 'green', color: '#16a34a' },
                          { name: 'orange', color: '#ea580c' },
                          { name: 'purple', color: '#9333ea' }
                        ].map((theme) => (
                          <button
                            key={theme.name}
                            onClick={() => setSelectedTheme(theme.name)}
                            className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 transition-all ${
                              selectedTheme === theme.name 
                                ? 'border-white scale-110' 
                                : 'border-slate-500 hover:border-slate-300'
                            }`}
                            style={{ backgroundColor: theme.color }}
                          />
                        ))}
            </div>
            </div>

                    {/* Currency Selection */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                      <span className="text-xs sm:text-sm font-medium text-slate-300">{t('invoice.controls.currency')}:</span>
                      <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="border border-orange-300 bg-slate-700 text-white rounded-lg px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-full sm:w-auto min-w-0"
                      >
                        {currencies.map((curr) => (
                          <option key={curr.code} value={curr.code} className="bg-slate-700">
                            {curr.code} - {curr.name}
                          </option>
                        ))}
                      </select>
            </div>
          </div>

                  {/* Download Button */}
        <Button
                    onClick={downloadPDF}
                    disabled={loading}
                    className="h-8 sm:h-11 px-3 sm:px-6 text-xs sm:text-sm font-medium shadow-sm hover:shadow-md transition-all bg-white hover:bg-gray-100 text-gray-900 border border-gray-300 w-full sm:w-auto"
                  >
              <Download className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    {t('invoice.controls.download')}
        </Button>
                </div>
              </div>
        </div>
      </div>
    </div>
  )
}
