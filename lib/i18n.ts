import { initReactI18next } from 'react-i18next'

const translations = {
  en: {
    "invoice": {
      "title": "Invoice",
      "companyName": "Enter Company Name",
      "invoiceNumber": "#",
      "date": "Date",
      "dueDate": "Due Date",
      "billTo": "Bill To",
      "clientName": "Client Name",
      "clientEmail": "Client Email",
      "clientPhone": "Client Phone",
      "clientAddress": "Address",
      "clientCity": "City",
      "clientCountry": "Country",
      "businessInfo": "Business Information",
      "businessAddress": "Business Address",
      "businessCity": "City",
      "businessCountry": "Country",
      "items": {
        "description": "Description",
        "quantity": "Qty",
        "rate": "Rate",
        "amount": "Amount",
        "action": "Action",
        "addItem": "Add Line Item"
      },
      "totals": {
        "subtotal": "Subtotal",
        "tax": "Tax",
        "total": "Total"
      },
      "notes": "Notes",
      "terms": "Terms & Conditions",
      "controls": {
        "theme": "Theme",
        "currency": "Currency",
        "language": "Language",
        "download": "Download PDF",
        "print": "Print Invoice"
      },
      "placeholders": {
        "itemDescription": "Enter item name/description",
        "notes": "Thank you for your business! We appreciate your trust in our services.",
        "terms": "Payment is due within 30 days of invoice date. Late payments may incur additional fees."
      }
    }
  },
  es: {
    "invoice": {
      "title": "Factura",
      "companyName": "Ingrese Nombre de la Empresa",
      "invoiceNumber": "#",
      "date": "Fecha",
      "dueDate": "Fecha de Vencimiento",
      "billTo": "Facturar a",
      "clientName": "Nombre del Cliente",
      "clientEmail": "Email del Cliente",
      "clientPhone": "Teléfono del Cliente",
      "clientAddress": "Dirección",
      "clientCity": "Ciudad",
      "clientCountry": "País",
      "businessInfo": "Información de la Empresa",
      "businessAddress": "Dirección de la Empresa",
      "businessCity": "Ciudad",
      "businessCountry": "País",
      "items": {
        "description": "Descripción",
        "quantity": "Cant",
        "rate": "Precio",
        "amount": "Importe",
        "action": "Acción",
        "addItem": "Agregar Línea"
      },
      "totals": {
        "subtotal": "Subtotal",
        "tax": "Impuesto",
        "total": "Total"
      },
      "notes": "Notas",
      "terms": "Términos y Condiciones",
      "controls": {
        "theme": "Tema",
        "currency": "Moneda",
        "language": "Idioma",
        "download": "Descargar PDF",
        "print": "Imprimir Factura"
      },
      "placeholders": {
        "itemDescription": "Ingrese nombre/descripción del artículo",
        "notes": "¡Gracias por su negocio! Apreciamos su confianza en nuestros servicios.",
        "terms": "El pago vence dentro de 30 días de la fecha de la factura. Los pagos tardíos pueden incurrir en tarifas adicionales."
      }
    }
  },
  fr: {
    "invoice": {
      "title": "Facture",
      "companyName": "Entrez le Nom de l'Entreprise",
      "invoiceNumber": "#",
      "date": "Date",
      "dueDate": "Date d'Échéance",
      "billTo": "Facturer à",
      "clientName": "Nom du Client",
      "clientEmail": "Email du Client",
      "clientPhone": "Téléphone du Client",
      "clientAddress": "Adresse",
      "clientCity": "Ville",
      "clientCountry": "Pays",
      "businessInfo": "Informations de l'Entreprise",
      "businessAddress": "Adresse de l'Entreprise",
      "businessCity": "Ville",
      "businessCountry": "Pays",
      "items": {
        "description": "Description",
        "quantity": "Qté",
        "rate": "Prix",
        "amount": "Montant",
        "action": "Action",
        "addItem": "Ajouter une Ligne"
      },
      "totals": {
        "subtotal": "Sous-total",
        "tax": "Taxe",
        "total": "Total"
      },
      "notes": "Notes",
      "terms": "Termes et Conditions",
      "controls": {
        "theme": "Thème",
        "currency": "Devise",
        "language": "Langue",
        "download": "Télécharger PDF",
        "print": "Imprimer la Facture"
      },
      "placeholders": {
        "itemDescription": "Entrez le nom/description de l'article",
        "notes": "Merci pour votre entreprise ! Nous apprécions votre confiance en nos services.",
        "terms": "Le paiement est dû dans les 30 jours suivant la date de facturation. Les paiements tardifs peuvent entraîner des frais supplémentaires."
      }
    }
  },
  de: {
    "invoice": {
      "title": "Rechnung",
      "companyName": "Firmenname eingeben",
      "invoiceNumber": "#",
      "date": "Datum",
      "dueDate": "Fälligkeitsdatum",
      "billTo": "Rechnung an",
      "clientName": "Kundenname",
      "clientEmail": "Kunden-E-Mail",
      "clientPhone": "Kundentelefon",
      "clientAddress": "Adresse",
      "clientCity": "Stadt",
      "clientCountry": "Land",
      "businessInfo": "Geschäftsinformationen",
      "businessAddress": "Geschäftsadresse",
      "businessCity": "Stadt",
      "businessCountry": "Land",
      "items": {
        "description": "Beschreibung",
        "quantity": "Menge",
        "rate": "Preis",
        "amount": "Betrag",
        "action": "Aktion",
        "addItem": "Zeile hinzufügen"
      },
      "totals": {
        "subtotal": "Zwischensumme",
        "tax": "Steuer",
        "total": "Gesamt"
      },
      "notes": "Notizen",
      "terms": "Geschäftsbedingungen",
      "controls": {
        "theme": "Design",
        "currency": "Währung",
        "language": "Sprache",
        "download": "PDF herunterladen",
        "print": "Rechnung drucken"
      },
      "placeholders": {
        "itemDescription": "Artikelname/Beschreibung eingeben",
        "notes": "Vielen Dank für Ihr Geschäft! Wir schätzen Ihr Vertrauen in unsere Dienstleistungen.",
        "terms": "Die Zahlung ist innerhalb von 30 Tagen nach Rechnungsdatum fällig. Verspätete Zahlungen können zusätzliche Gebühren verursachen."
      }
    }
  },
  zh: {
    "invoice": {
      "title": "发票",
      "companyName": "输入公司名称",
      "invoiceNumber": "#",
      "date": "日期",
      "dueDate": "到期日期",
      "billTo": "账单地址",
      "clientName": "客户姓名",
      "clientEmail": "客户邮箱",
      "clientPhone": "客户电话",
      "clientAddress": "地址",
      "clientCity": "城市",
      "clientCountry": "国家",
      "businessInfo": "企业信息",
      "businessAddress": "企业地址",
      "businessCity": "城市",
      "businessCountry": "国家",
      "items": {
        "description": "描述",
        "quantity": "数量",
        "rate": "单价",
        "amount": "金额",
        "action": "操作",
        "addItem": "添加项目"
      },
      "totals": {
        "subtotal": "小计",
        "tax": "税费",
        "total": "总计"
      },
      "notes": "备注",
      "terms": "条款和条件",
      "controls": {
        "theme": "主题",
        "currency": "货币",
        "language": "语言",
        "download": "下载PDF",
        "print": "打印发票"
      },
      "placeholders": {
        "itemDescription": "输入项目名称/描述",
        "notes": "感谢您的业务！我们感谢您对我们服务的信任。",
        "terms": "付款应在发票日期后30天内到期。逾期付款可能会产生额外费用。"
      }
    }
  },
  ar: {
    "invoice": {
      "title": "فاتورة",
      "companyName": "أدخل اسم الشركة",
      "invoiceNumber": "#",
      "date": "التاريخ",
      "dueDate": "تاريخ الاستحقاق",
      "billTo": "الفاتورة إلى",
      "clientName": "اسم العميل",
      "clientEmail": "بريد العميل الإلكتروني",
      "clientPhone": "هاتف العميل",
      "clientAddress": "العنوان",
      "clientCity": "المدينة",
      "clientCountry": "البلد",
      "businessInfo": "معلومات الشركة",
      "businessAddress": "عنوان الشركة",
      "businessCity": "المدينة",
      "businessCountry": "البلد",
      "items": {
        "description": "الوصف",
        "quantity": "الكمية",
        "rate": "السعر",
        "amount": "المبلغ",
        "action": "الإجراء",
        "addItem": "إضافة عنصر"
      },
      "totals": {
        "subtotal": "المجموع الفرعي",
        "tax": "الضريبة",
        "total": "المجموع"
      },
      "notes": "ملاحظات",
      "terms": "الشروط والأحكام",
      "controls": {
        "theme": "المظهر",
        "currency": "العملة",
        "language": "اللغة",
        "download": "تحميل PDF",
        "print": "طباعة الفاتورة"
      },
      "placeholders": {
        "itemDescription": "أدخل اسم/وصف العنصر",
        "notes": "شكراً لعملك! نقدر ثقتك في خدماتنا.",
        "terms": "الدفع مستحق خلال 30 يوماً من تاريخ الفاتورة. قد تترتب رسوم إضافية على المدفوعات المتأخرة."
      }
    }
  },

  pt: {
    "invoice": {
      "title": "Fatura",
      "companyName": "Digite o Nome da Empresa",
      "invoiceNumber": "#",
      "date": "Data",
      "dueDate": "Data de Vencimento",
      "billTo": "Faturar para",
      "clientName": "Nome do Cliente",
      "clientEmail": "Email do Cliente",
      "clientPhone": "Telefone do Cliente",
      "clientAddress": "Endereço",
      "clientCity": "Cidade",
      "clientCountry": "País",
      "businessInfo": "Informações da Empresa",
      "businessAddress": "Endereço da Empresa",
      "businessCity": "Cidade",
      "businessCountry": "País",
      "items": {
        "description": "Descrição",
        "quantity": "Qtd",
        "rate": "Preço",
        "amount": "Valor",
        "action": "Ação",
        "addItem": "Adicionar Linha"
      },
      "totals": {
        "subtotal": "Subtotal",
        "tax": "Imposto",
        "total": "Total"
      },
      "notes": "Notas",
      "terms": "Termos e Condições",
      "controls": {
        "theme": "Tema",
        "currency": "Moeda",
        "language": "Idioma",
        "download": "Baixar PDF",
        "print": "Imprimir Fatura"
      },
      "placeholders": {
        "itemDescription": "Digite nome/descrição do item",
        "notes": "Obrigado pelo seu negócio! Agradecemos sua confiança em nossos serviços.",
        "terms": "O pagamento é devido dentro de 30 dias da data da fatura. Pagamentos atrasados podem incorrer em taxas adicionais."
      }
    }
  },
  ru: {
    "invoice": {
      "title": "Счет",
      "companyName": "Введите название компании",
      "invoiceNumber": "#",
      "date": "Дата",
      "dueDate": "Срок оплаты",
      "billTo": "Счет для",
      "clientName": "Имя клиента",
      "clientEmail": "Email клиента",
      "clientPhone": "Телефон клиента",
      "clientAddress": "Адрес",
      "clientCity": "Город",
      "clientCountry": "Страна",
      "businessInfo": "Информация о компании",
      "businessAddress": "Адрес компании",
      "businessCity": "Город",
      "businessCountry": "Страна",
      "items": {
        "description": "Описание",
        "quantity": "Кол-во",
        "rate": "Цена",
        "amount": "Сумма",
        "action": "Действие",
        "addItem": "Добавить строку"
      },
      "totals": {
        "subtotal": "Подитог",
        "tax": "Налог",
        "total": "Итого"
      },
      "notes": "Примечания",
      "terms": "Условия и положения",
      "controls": {
        "theme": "Тема",
        "currency": "Валюта",
        "language": "Язык",
        "download": "Скачать PDF",
        "print": "Печать счета"
      },
      "placeholders": {
        "itemDescription": "Введите название/описание товара",
        "notes": "Спасибо за ваш бизнес! Мы ценим ваше доверие к нашим услугам.",
        "terms": "Оплата должна быть произведена в течение 30 дней с даты выставления счета. За просрочку могут взиматься дополнительные сборы."
      }
    }
  },
  ja: {
    "invoice": {
      "title": "請求書",
      "companyName": "会社名を入力",
      "invoiceNumber": "#",
      "date": "日付",
      "dueDate": "支払期日",
      "billTo": "請求先",
      "clientName": "顧客名",
      "clientEmail": "顧客メール",
      "clientPhone": "顧客電話",
      "clientAddress": "住所",
      "clientCity": "都市",
      "clientCountry": "国",
      "businessInfo": "会社情報",
      "businessAddress": "会社住所",
      "businessCity": "都市",
      "businessCountry": "国",
      "items": {
        "description": "説明",
        "quantity": "数量",
        "rate": "単価",
        "amount": "金額",
        "action": "操作",
        "addItem": "行を追加"
      },
      "totals": {
        "subtotal": "小計",
        "tax": "税金",
        "total": "合計"
      },
      "notes": "備考",
      "terms": "利用規約",
      "controls": {
        "theme": "テーマ",
        "currency": "通貨",
        "language": "言語",
        "download": "PDFダウンロード",
        "print": "請求書印刷"
      },
      "placeholders": {
        "itemDescription": "商品名/説明を入力",
        "notes": "ご利用いただき、ありがとうございます！お客様の信頼に感謝いたします。",
        "terms": "請求書発行日から30日以内にお支払いください。遅延により追加料金が発生する場合があります。"
      }
    }
  },
  ko: {
    "invoice": {
      "title": "청구서",
      "companyName": "회사명 입력",
      "invoiceNumber": "#",
      "date": "날짜",
      "dueDate": "결제일",
      "billTo": "청구 대상",
      "clientName": "고객명",
      "clientEmail": "고객 이메일",
      "clientPhone": "고객 전화",
      "clientAddress": "주소",
      "clientCity": "도시",
      "clientCountry": "국가",
      "businessInfo": "회사 정보",
      "businessAddress": "회사 주소",
      "businessCity": "도시",
      "businessCountry": "국가",
      "items": {
        "description": "설명",
        "quantity": "수량",
        "rate": "단가",
        "amount": "금액",
        "action": "작업",
        "addItem": "항목 추가"
      },
      "totals": {
        "subtotal": "소계",
        "tax": "세금",
        "total": "총계"
      },
      "notes": "메모",
      "terms": "약관",
      "controls": {
        "theme": "테마",
        "currency": "통화",
        "language": "언어",
        "download": "PDF 다운로드",
        "print": "청구서 인쇄"
      },
      "placeholders": {
        "itemDescription": "항목명/설명 입력",
        "notes": "비즈니스를 이용해 주셔서 감사합니다! 서비스에 대한 신뢰를 높이 평가합니다.",
        "terms": "청구서 발행일로부터 30일 이내에 결제해야 합니다. 지연 시 추가 수수료가 발생할 수 있습니다."
      }
    }
  },
  hi: {
    "invoice": {
      "title": "चालान",
      "companyName": "कंपनी का नाम दर्ज करें",
      "invoiceNumber": "#",
      "date": "तारीख",
      "dueDate": "देय तिथि",
      "billTo": "बिल टू",
      "clientName": "ग्राहक का नाम",
      "clientEmail": "ग्राहक का ईमेल",
      "clientPhone": "ग्राहक का फोन",
      "clientAddress": "पता",
      "clientCity": "शहर",
      "clientCountry": "देश",
      "businessInfo": "व्यापारिक जानकारी",
      "businessAddress": "व्यापारिक पता",
      "businessCity": "शहर",
      "businessCountry": "देश",
      "items": {
        "description": "विवरण",
        "quantity": "मात्रा",
        "rate": "दर",
        "amount": "राशि",
        "action": "कार्य",
        "addItem": "पंक्ति जोड़ें"
      },
      "totals": {
        "subtotal": "उप-योग",
        "tax": "कर",
        "total": "कुल"
      },
      "notes": "नोट्स",
      "terms": "नियम और शर्तें",
      "controls": {
        "theme": "थीम",
        "currency": "मुद्रा",
        "language": "भाषा",
        "download": "PDF डाउनलोड",
        "print": "चालान प्रिंट करें"
      },
      "placeholders": {
        "itemDescription": "आइटम नाम/विवरण दर्ज करें",
        "notes": "आपके व्यापार के लिए धन्यवाद! हमारी सेवाओं में आपके विश्वास की सराहना करते हैं।",
        "terms": "चालान की तारीख से 30 दिनों के भीतर भुगतान देय है। देर से भुगतान पर अतिरिक्त शुल्क लग सकता है।"
      }
    }
  },
  it: {
    "invoice": {
      "title": "Fattura",
      "companyName": "Inserisci Nome Azienda",
      "invoiceNumber": "#",
      "date": "Data",
      "dueDate": "Data Scadenza",
      "billTo": "Fattura a",
      "clientName": "Nome Cliente",
      "clientEmail": "Email Cliente",
      "clientPhone": "Telefono Cliente",
      "clientAddress": "Indirizzo",
      "clientCity": "Città",
      "clientCountry": "Paese",
      "businessInfo": "Informazioni Azienda",
      "businessAddress": "Indirizzo Azienda",
      "businessCity": "Città",
      "businessCountry": "Paese",
      "items": {
        "description": "Descrizione",
        "quantity": "Qta",
        "rate": "Prezzo",
        "amount": "Importo",
        "action": "Azione",
        "addItem": "Aggiungi Riga"
      },
      "totals": {
        "subtotal": "Subtotale",
        "tax": "Tassa",
        "total": "Totale"
      },
      "notes": "Note",
      "terms": "Termini e Condizioni",
      "controls": {
        "theme": "Tema",
        "currency": "Valuta",
        "language": "Lingua",
        "download": "Scarica PDF",
        "print": "Stampa Fattura"
      },
      "placeholders": {
        "itemDescription": "Inserisci nome/descrizione articolo",
        "notes": "Grazie per il tuo business! Apprezziamo la tua fiducia nei nostri servizi.",
        "terms": "Il pagamento è dovuto entro 30 giorni dalla data della fattura. I pagamenti in ritardo possono comportare commissioni aggiuntive."
      }
    }
  },
  nl: {
    "invoice": {
      "title": "Factuur",
      "companyName": "Voer Bedrijfsnaam in",
      "invoiceNumber": "#",
      "date": "Datum",
      "dueDate": "Vervaldatum",
      "billTo": "Factuur aan",
      "clientName": "Klantnaam",
      "clientEmail": "Klant Email",
      "clientPhone": "Klant Telefoon",
      "clientAddress": "Adres",
      "clientCity": "Stad",
      "clientCountry": "Land",
      "businessInfo": "Bedrijfsinformatie",
      "businessAddress": "Bedrijfsadres",
      "businessCity": "Stad",
      "businessCountry": "Land",
      "items": {
        "description": "Beschrijving",
        "quantity": "Aantal",
        "rate": "Prijs",
        "amount": "Bedrag",
        "action": "Actie",
        "addItem": "Regel Toevoegen"
      },
      "totals": {
        "subtotal": "Subtotaal",
        "tax": "Belasting",
        "total": "Totaal"
      },
      "notes": "Notities",
      "terms": "Voorwaarden",
      "controls": {
        "theme": "Thema",
        "currency": "Valuta",
        "language": "Taal",
        "download": "PDF Downloaden",
        "print": "Factuur Afdrukken"
      },
      "placeholders": {
        "itemDescription": "Voer artikelnaam/beschrijving in",
        "notes": "Bedankt voor uw zaken! We waarderen uw vertrouwen in onze diensten.",
        "terms": "Betaling is verschuldigd binnen 30 dagen na factuurdatum. Late betalingen kunnen extra kosten met zich meebrengen."
      }
    }
  }
}

if (typeof window !== 'undefined') {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: false,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
      resources: translations
    })
}

export default i18n