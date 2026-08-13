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
        "contact": "Contact",
        "projects": "Projects",
        "careers": "Careers"
      },
      "home": {
        "title": "Creating the energy of the future.",
        "subtitle": "Pro power. Pro innovation. Built for the global enterprise.",
        "btn_products": "View Products",
        "btn_contact": "Contact Us",
        "metrics_title": "Global Scale",
        "metrics_1_num": "50+", "metrics_1_txt": "Countries Served",
        "metrics_2_num": "10k+", "metrics_2_txt": "Active Installations",
        "metrics_3_num": "99.9%", "metrics_3_txt": "Uptime Guarantee",
        "clients_title": "Trusted by Industry Leaders",
        "testimonials_title": "Client Success",
        "test_1_quote": "VoltCore transformed our grid stability. Unmatched quality.", "test_1_author": "- Sarah Jenkins, CTO of NexaGrid",
        "test_2_quote": "The automation panels reduced our downtime by 40%.", "test_2_author": "- David Chen, Plant Manager"
      },
      "about": {
        "title": "About Us.",
        "subtitle": "Innovation in the electrical industry.",
        "desc": "VoltCore Industries is a leading global enterprise specializing in the production of the highest quality electrical equipment, transformers, and automation systems. Our mission is to create energy-efficient, reliable, and scalable products for the modern world.",
        "video_title": "Corporate Demo Video",
        "leadership_title": "Our Leadership",
        "leader_1_name": "Marcus Vance", "leader_1_role": "Chief Executive Officer",
        "leader_2_name": "Elena Rostova", "leader_2_role": "Chief Technology Officer",
        "timeline_title": "Our Journey",
        "time_1_year": "2010", "time_1_txt": "Founded in Tbilisi, Georgia.",
        "time_2_year": "2015", "time_2_txt": "Launched the first Nexus series transformer.",
        "time_3_year": "2020", "time_3_txt": "Expanded into automation and smart grid technologies.",
        "values_title": "Core Values",
        "val_1": "Uncompromising Quality", "val_2": "Sustainable Innovation", "val_3": "Global Reliability"
      },
      "products": {
        "title": "Premium Quality.",
        "subtitle": "Engineered for maximum performance and reliability.",
        "cat_transformers": "Transformers",
        "cat_automation": "Automation Systems",
        "cat_cables": "Industrial Cables",
        "p_nex9_title": "Nexus-9 Transformer", "p_nex9_desc": "110kV High voltage system. 99% efficiency rating.",
        "p_nex7_title": "Nexus-7 Distribution", "p_nex7_desc": "35kV Smart distribution transformer with IoT.",
        "p_nex5_title": "Nexus-5 Compact", "p_nex5_desc": "10kV Compact substation for urban environments.",
        "p_auto_omni_title": "OmniControl Panel", "p_auto_omni_desc": "Centralized factory automation with AI predictive maintenance.",
        "p_auto_edge_title": "EdgeLogic PLC", "p_auto_edge_desc": "High-speed programmable logic controller for extreme environments.",
        "p_auto_vision_title": "Vision OS Interface", "p_auto_vision_desc": "Industrial HMI touch panels with multi-touch support.",
        "p_cab_titan_title": "TitanCore HV Cable", "p_cab_titan_desc": "Armored high-voltage underground transmission cable.",
        "p_cab_flex_title": "FlexShield Robotics", "p_cab_flex_desc": "Highly flexible, durable cables for robotic arms.",
        "p_cab_fire_title": "PyroSafe Line", "p_cab_fire_desc": "Fire-resistant emergency circuit cables."
      },
      "services": {
        "title": "Top-tier Service.",
        "subtitle": "Comprehensive installation, support, and consultation for your enterprise.",
        "serv1_title": "Professional Installation", "serv1_desc": "Our certified global engineering teams ensure safe, fast, and compliant installation of all equipment.",
        "serv2_title": "24/7 Global Support & SLAs", "serv2_desc": "Dedicated support desks offering 4-hour on-site response times and constant monitoring to prevent downtime.",
        "serv3_title": "Audit & Consultation", "serv3_desc": "Complete energy efficiency audits and grid optimization strategies for your large-scale business operations.",
        "serv4_title": "Technical Training", "serv4_desc": "On-site and remote certification programs for your internal maintenance and engineering staff."
      },
      "projects": {
        "title": "Global Case Studies.",
        "subtitle": "Real-world impact of VoltCore technologies.",
        "proj1_title": "North Sea Offshore Wind Integration",
        "proj1_desc": "Supplied ultra-durable TitanCore cables and custom Nexus-9 transformers for a 500MW offshore wind farm, enduring extreme saline environments.",
        "proj2_title": "Automated Gigafactory - Berlin",
        "proj2_desc": "Fully automated production lines using OmniControl panels, increasing factory throughput by 22% while reducing energy consumption.",
        "proj3_title": "Smart City Grid - Singapore",
        "proj3_desc": "Upgraded the city's power distribution with IoT-enabled Nexus-7 transformers for real-time load balancing."
      },
      "sustainability": {
        "title": "Our Planet. Our Future.",
        "subtitle": "Creating technologies that protect the environment.",
        "section_title": "Towards Zero Emissions",
        "section_desc": "VoltCore's global manufacturing facilities run on 100% renewable energy. Our products are designed to minimize energy loss and reduce the industrial carbon footprint.",
        "roadmap_title": "Our 2030 Roadmap",
        "roadmap_1": "2024: 100% Renewable Energy in all EU facilities.",
        "roadmap_2": "2026: Zero waste to landfill across global operations.",
        "roadmap_3": "2030: Fully Carbon Neutral supply chain.",
        "cert_title": "Certifications",
        "cert_desc": "Proudly certified with ISO 14001 (Environmental Management) and ISO 50001 (Energy Management)."
      },
      "careers": {
        "title": "Join the VoltCore Team.",
        "subtitle": "Build the future of energy with us.",
        "benefits_title": "Why Work Here?",
        "ben_1": "Global Opportunities", "ben_2": "Comprehensive Health & Wellness", "ben_3": "Continuous Learning & Development",
        "positions_title": "Open Positions",
        "pos_1_title": "Senior Electrical Engineer", "pos_1_loc": "Tbilisi, Georgia",
        "pos_2_title": "Industrial Automation Specialist", "pos_2_loc": "Berlin, Germany",
        "pos_3_title": "Global Supply Chain Manager", "pos_3_loc": "Tokyo, Japan"
      },
      "contact": {
        "title": "Contact Us.",
        "subtitle": "We are ready to support your next major project.",
        "placeholder_name": "Name",
        "placeholder_email": "Email",
        "placeholder_msg": "Message",
        "btn_send": "Send Inquiry",
        "offices_title": "Global Offices",
        "off_hq": "Headquarters: Tbilisi, Georgia",
        "off_eu": "European Hub: Berlin, Germany",
        "off_as": "Asia-Pacific: Tokyo, Japan",
        "faq_title": "Frequently Asked Questions",
        "faq_1_q": "Do you provide custom transformer designs?",
        "faq_1_a": "Yes, our engineering team works directly with clients to design bespoke solutions for unique grid requirements.",
        "faq_2_q": "What is the standard lead time for industrial cables?",
        "faq_2_a": "Standard orders are fulfilled within 2-4 weeks, while custom armored cables may take 6-8 weeks."
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
        "contact": "კონტაქტი",
        "projects": "პროექტები",
        "careers": "კარიერა"
      },
      "home": {
        "title": "შევქმნათ მომავლის ენერგია.",
        "subtitle": "პრო. ძალა. პრო. ინოვაცია. შექმნილია გლობალური ინდუსტრიისთვის.",
        "btn_products": "პროდუქციის ნახვა",
        "btn_contact": "დაგვიკავშირდით",
        "metrics_title": "გლობალური მასშტაბი",
        "metrics_1_num": "50+", "metrics_1_txt": "ქვეყანა",
        "metrics_2_num": "10k+", "metrics_2_txt": "ინსტალაცია",
        "metrics_3_num": "99.9%", "metrics_3_txt": "უწყვეტობის გარანტია",
        "clients_title": "გვენდობიან ინდუსტრიის ლიდერები",
        "testimonials_title": "კლიენტების წარმატება",
        "test_1_quote": "VoltCore-მა სრულად გარდაქმნა ჩვენი ქსელის სტაბილურობა.", "test_1_author": "- სარა ჯენკინსი, NexaGrid-ის CTO",
        "test_2_quote": "ავტომატიზაციის პანელებმა 40%-ით შეამცირეს ჩვენი დანაკარგები.", "test_2_author": "- დავით ჩენი, ქარხნის მენეჯერი"
      },
      "about": {
        "title": "ჩვენ შესახებ.",
        "subtitle": "ინოვაცია ელექტრონულ ინდუსტრიაში.",
        "desc": "VoltCore Industries არის წამყვანი გლობალური კომპანია, რომელიც სპეციალიზდება უმაღლესი ხარისხის ელექტრო მოწყობილობების, ტრანსფორმატორებისა და ავტომატიზაციის სისტემების წარმოებაში.",
        "video_title": "სადემონსტრაციო ვიდეო",
        "leadership_title": "მმართველთა გუნდი",
        "leader_1_name": "მარკუს ვანსი", "leader_1_role": "გენერალური დირექტორი",
        "leader_2_name": "ელენა როსტოვა", "leader_2_role": "ტექნოლოგიური დირექტორი",
        "timeline_title": "ჩვენი ისტორია",
        "time_1_year": "2010", "time_1_txt": "დაარსდა თბილისში, საქართველო.",
        "time_2_year": "2015", "time_2_txt": "პირველი Nexus სერიის ტრანსფორმატორის გამოშვება.",
        "time_3_year": "2020", "time_3_txt": "ავტომატიზაციისა და ჭკვიანი ქსელების ბაზარზე შესვლა.",
        "values_title": "მთავარი ფასეულობები",
        "val_1": "უმაღლესი ხარისხი", "val_2": "მდგრადი ინოვაცია", "val_3": "გლობალური საიმედოობა"
      },
      "products": {
        "title": "უმაღლესი ხარისხი.",
        "subtitle": "შექმნილია მაქსიმალური წარმადობისთვის.",
        "cat_transformers": "ტრანსფორმატორები",
        "cat_automation": "ავტომატიზაციის სისტემები",
        "cat_cables": "ინდუსტრიული კაბელები",
        "p_nex9_title": "Nexus-9 ტრანსფორმატორი", "p_nex9_desc": "110kV მაღალი ძაბვის სისტემა. 99% ეფექტურობა.",
        "p_nex7_title": "Nexus-7 დისტრიბუცია", "p_nex7_desc": "35kV ჭკვიანი ტრანსფორმატორი IoT მხარდაჭერით.",
        "p_nex5_title": "Nexus-5 კომპაქტი", "p_nex5_desc": "10kV კომპაქტური ქვესადგური ურბანული გარემოსთვის.",
        "p_auto_omni_title": "OmniControl პანელი", "p_auto_omni_desc": "ცენტრალიზებული ქარხნის ავტომატიზაცია AI-ით.",
        "p_auto_edge_title": "EdgeLogic PLC", "p_auto_edge_desc": "მაღალსიჩქარიანი პროგრამირებადი კონტროლერი.",
        "p_auto_vision_title": "Vision OS ინტერფეისი", "p_auto_vision_desc": "ინდუსტრიული HMI სენსორული პანელები.",
        "p_cab_titan_title": "TitanCore HV კაბელი", "p_cab_titan_desc": "არმირებული მაღალი ძაბვის მიწისქვეშა კაბელი.",
        "p_cab_flex_title": "FlexShield რობოტიკა", "p_cab_flex_desc": "მაღალი მოქნილობის კაბელები რობოტული სისტემებისთვის.",
        "p_cab_fire_title": "PyroSafe ხაზი", "p_cab_fire_desc": "ცეცხლგამძლე კაბელები საგანგებო სისტემებისთვის."
      },
      "services": {
        "title": "უმაღლესი დონის სერვისი.",
        "subtitle": "მონტაჟი, მხარდაჭერა და კონსულტაცია თქვენი წარმატებისთვის.",
        "serv1_title": "პროფესიონალური მონტაჟი", "serv1_desc": "ჩვენი სერტიფიცირებული ინჟინრები უზრუნველყოფენ მოწყობილობების უსაფრთხო და სწრაფ ინსტალაციას გლობალურად.",
        "serv2_title": "24/7 ტექნიკური მხარდაჭერა და SLA", "serv2_desc": "მხარდაჭერის გუნდები 4-საათიანი რეაგირების დროით და უწყვეტი მონიტორინგით.",
        "serv3_title": "აუდიტი და კონსულტაცია", "serv3_desc": "ენერგოეფექტურობის აუდიტი და ოპტიმიზაციის სტრატეგიები მსხვილი ბიზნესისთვის.",
        "serv4_title": "ტექნიკური ტრენინგი", "serv4_desc": "სერტიფიცირების პროგრამები თქვენი შიდა ინჟინრებისთვის."
      },
      "projects": {
        "title": "გლობალური პროექტები.",
        "subtitle": "VoltCore ტექნოლოგიების რეალური შედეგები.",
        "proj1_title": "ჩრდილოეთის ზღვის ქარის ელექტროსადგური",
        "proj1_desc": "მივაწოდეთ ულტრა-გამძლე TitanCore კაბელები და Nexus-9 ტრანსფორმატორები 500MW ოფშორული სადგურისთვის.",
        "proj2_title": "ავტომატიზირებული მეგა-ქარხანა - ბერლინი",
        "proj2_desc": "სრულად ავტომატიზირებული საწარმოო ხაზები OmniControl პანელებით, რამაც 22%-ით გაზარდა პროდუქტიულობა.",
        "proj3_title": "ჭკვიანი ქალაქის ქსელი - სინგაპური",
        "proj3_desc": "ქალაქის ქსელის განახლება IoT-ზე დაფუძნებული Nexus-7 ტრანსფორმატორებით."
      },
      "sustainability": {
        "title": "ჩვენი პლანეტა. ჩვენი მომავალი.",
        "subtitle": "ვქმნით ტექნოლოგიებს, რომლებიც იცავენ გარემოს.",
        "section_title": "ნულოვანი ემისიისკენ",
        "section_desc": "VoltCore-ის ყველა ქარხანა 100%-ით განახლებად ენერგიაზე მუშაობს. ჩვენი პროდუქცია ამცირებს ინდუსტრიულ ნახშირბადის კვალს.",
        "roadmap_title": "2030 წლის სტრატეგია",
        "roadmap_1": "2024: 100% განახლებადი ენერგია ევროპის ობიექტებში.",
        "roadmap_2": "2026: ნულოვანი ნარჩენები გლობალურად.",
        "roadmap_3": "2030: სრულად ნახშირბად-ნეიტრალური მომარაგების ჯაჭვი.",
        "cert_title": "სერტიფიკატები",
        "cert_desc": "ჩვენ ვფლობთ ISO 14001 (გარემოს მართვა) და ISO 50001 (ენერგო მართვა) სერტიფიკატებს."
      },
      "careers": {
        "title": "შემოუერთდით VoltCore-ს.",
        "subtitle": "შევქმნათ მომავლის ენერგია ერთად.",
        "benefits_title": "რატომ ჩვენთან?",
        "ben_1": "გლობალური შესაძლებლობები", "ben_2": "ჯანმრთელობის სრული დაზღვევა", "ben_3": "მუდმივი განვითარება და სწავლა",
        "positions_title": "ღია პოზიციები",
        "pos_1_title": "უფროსი ელექტრო ინჟინერი", "pos_1_loc": "თბილისი, საქართველო",
        "pos_2_title": "ინდუსტრიული ავტომატიზაციის სპეციალისტი", "pos_2_loc": "ბერლინი, გერმანია",
        "pos_3_title": "მომარაგების ჯაჭვის გლობალური მენეჯერი", "pos_3_loc": "ტოკიო, იაპონია"
      },
      "contact": {
        "title": "დაგვიკავშირდით.",
        "subtitle": "ჩვენ მზად ვართ მხარი დავუჭიროთ თქვენს პროექტს.",
        "placeholder_name": "სახელი",
        "placeholder_email": "ელ. ფოსტა",
        "placeholder_msg": "შეტყობინება",
        "btn_send": "გაგზავნა",
        "offices_title": "გლობალური ოფისები",
        "off_hq": "სათაო ოფისი: თბილისი, საქართველო",
        "off_eu": "ევროპის ცენტრი: ბერლინი, გერმანია",
        "off_as": "აზია-ოკეანეთი: ტოკიო, იაპონია",
        "faq_title": "ხშირად დასმული კითხვები",
        "faq_1_q": "ქმნით თუ არა ინდივიდუალურ ტრანსფორმატორებს?",
        "faq_1_a": "დიახ, ჩვენი საინჟინრო გუნდი ქმნის უნიკალურ გადაწყვეტილებებს კონკრეტული მოთხოვნებისთვის.",
        "faq_2_q": "რამდენი ხანი სჭირდება კაბელების დამზადებას?",
        "faq_2_a": "სტანდარტული შეკვეთები სრულდება 2-4 კვირაში, სპეციალური კაბელები 6-8 კვირაში."
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
