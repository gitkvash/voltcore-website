import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "products": "Products",
        "services": "Services",
        "sustainability": "Sustainability",
        "about": "About Us",
        "contact": "Contact"
      },
      "home": {
        "title": "Creating the energy of the future.",
        "subtitle": "Pro power. Pro innovation.",
        "btn_products": "View Products",
        "btn_contact": "Contact Us"
      },
      "about": {
        "title": "About Us.",
        "subtitle": "Innovation in the electrical industry.",
        "desc": "VoltCore Industries is a leading company specializing in the production of highest quality electrical equipment, transformers, and automation systems. Our mission is to create energy-efficient and reliable products."
      },
      "products": {
        "title": "Premium Quality.",
        "subtitle": "Our products are designed for maximum performance.",
        "prod1_title": "Nexus-9 Transformer",
        "prod1_desc": "Industrial standard high voltage system.",
        "prod2_title": "Automation Panel",
        "prod2_desc": "Smart control system with full monitoring.",
        "prod3_title": "Industrial Cables",
        "prod3_desc": "High conductivity and thermo-resistant cables.",
        "coming_soon": "Coming Soon"
      },
      "services": {
        "title": "Top-tier Service.",
        "subtitle": "Installation, support, and consultation for your success.",
        "serv1_title": "Professional Installation",
        "serv1_desc": "Our certified engineers ensure safe and fast installation of equipment.",
        "serv2_title": "Technical Support",
        "serv2_desc": "24/7 technical assistance and monitoring to prevent downtime.",
        "serv3_title": "Audit & Consultation",
        "serv3_desc": "Energy efficiency audits and optimization strategies for your business."
      },
      "sustainability": {
        "title": "Our Planet. Our Future.",
        "subtitle": "Creating technologies that protect the environment.",
        "section_title": "Towards Zero Emissions",
        "section_desc": "All new VoltCore factories run on 100% renewable energy. Our products are designed to minimize energy loss and reduce the industrial carbon footprint."
      },
      "contact": {
        "title": "Contact Us.",
        "subtitle": "We are ready to answer any of your questions.",
        "placeholder_name": "Name",
        "placeholder_email": "Email",
        "placeholder_msg": "Message",
        "btn_send": "Send"
      },
      "footer": {
        "rights": "VoltCore Industries. All rights reserved."
      }
    }
  },
  ge: {
    translation: {
      "nav": {
        "home": "მთავარი",
        "products": "პროდუქცია",
        "services": "სერვისები",
        "sustainability": "მდგრადობა",
        "about": "ჩვენ შესახებ",
        "contact": "კონტაქტი"
      },
      "home": {
        "title": "შევქმნათ მომავლის ენერგია.",
        "subtitle": "პრო. ძალა. პრო. ინოვაცია.",
        "btn_products": "პროდუქციის ნახვა",
        "btn_contact": "დაგვიკავშირდით"
      },
      "about": {
        "title": "ჩვენ შესახებ.",
        "subtitle": "ინოვაცია ელექტრონულ ინდუსტრიაში.",
        "desc": "VoltCore Industries არის წამყვანი კომპანია, რომელიც სპეციალიზდება უმაღლესი ხარისხის ელექტრო მოწყობილობების, ტრანსფორმატორებისა და ავტომატიზაციის სისტემების წარმოებაში. ჩვენი მისიაა შევქმნათ ენერგოეფექტური და საიმედო პროდუქცია."
      },
      "products": {
        "title": "უმაღლესი ხარისხი.",
        "subtitle": "ჩვენი პროდუქცია შექმნილია მაქსიმალური წარმადობისთვის.",
        "prod1_title": "Nexus-9 ტრანსფორმატორი",
        "prod1_desc": "ინდუსტრიული სტანდარტის მაღალი ძაბვის სისტემა.",
        "prod2_title": "ავტომატიზაციის პანელი",
        "prod2_desc": "ჭკვიანი მართვის სისტემა სრული მონიტორინგით.",
        "prod3_title": "ინდუსტრიული კაბელები",
        "prod3_desc": "მაღალი გამტარობის და თერმო-მდგრადი კაბელები.",
        "coming_soon": "მალე დაემატება"
      },
      "services": {
        "title": "უმაღლესი დონის სერვისი.",
        "subtitle": "მონტაჟი, მხარდაჭერა და კონსულტაცია თქვენი წარმატებისთვის.",
        "serv1_title": "პროფესიონალური მონტაჟი",
        "serv1_desc": "ჩვენი სერტიფიცირებული ინჟინრები უზრუნველყოფენ მოწყობილობების უსაფრთხო და სწრაფ ინსტალაციას.",
        "serv2_title": "ტექნიკური მხარდაჭერა",
        "serv2_desc": "24/7 ტექნიკური დახმარება და მონიტორინგი შეფერხებების თავიდან ასაცილებლად.",
        "serv3_title": "აუდიტი და კონსულტაცია",
        "serv3_desc": "ენერგოეფექტურობის აუდიტი და ოპტიმიზაციის სტრატეგიები თქვენი ბიზნესისთვის."
      },
      "sustainability": {
        "title": "ჩვენი პლანეტა. ჩვენი მომავალი.",
        "subtitle": "ვქმნით ტექნოლოგიებს, რომლებიც იცავენ გარემოს.",
        "section_title": "ნულოვანი ემისიისკენ",
        "section_desc": "VoltCore-ის ყველა ახალი ქარხანა 100%-ით განახლებად ენერგიაზე მუშაობს. ჩვენი პროდუქცია შექმნილია იმისთვის, რომ მინიმუმამდე დაიყვანოს ენერგიის დანაკარგი და შეამციროს ინდუსტრიული ნახშირბადის კვალი."
      },
      "contact": {
        "title": "დაგვიკავშირდით.",
        "subtitle": "მზად ვართ გიპასუხოთ ნებისმიერ შეკითხვაზე.",
        "placeholder_name": "სახელი",
        "placeholder_email": "ელ. ფოსტა",
        "placeholder_msg": "შეტყობინება",
        "btn_send": "გაგზავნა"
      },
      "footer": {
        "rights": "VoltCore Industries. ყველა უფლება დაცულია."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ge", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
