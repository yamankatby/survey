const Age: React.FC = () => (
  <div>
    <label htmlFor="age">Yaş</label>
    <input type="number" id="age" name="age" min="0" />
  </div>
);

const Gender: React.FC = () => (
  <div>
    <label htmlFor="gender">Cinsiyet</label>
    <div>
      <input type="radio" id="female" name="gender" value="female" />
      <label htmlFor="female">Kadın</label>
    </div>
    <div>
      <input type="radio" id="male" name="gender" value="male" />
      <label htmlFor="male">Erkek</label>
    </div>
  </div>
);

const ExperienceYears: React.FC = () => (
  <div>
    <label htmlFor="experience-years">Toplam Tecrübe Yılı</label>
    <input
      type="number"
      id="experience-years"
      name="experience-years"
      min="0"
    />
  </div>
);

const Degree: React.FC = () => (
  <div>
    <label htmlFor="degree">Lisans Derecesi</label>
    <div>
      <input type="radio" id="none" name="degree" value="Yok" />
      <label htmlFor="none">Yok</label>
    </div>
    <div>
      <input
        type="radio"
        id="related"
        name="degree"
        value="Var (Alakalı Alan)"
      />
      <label htmlFor="related">Var (Alakalı Alan)</label>
    </div>
    <div>
      <input
        type="radio"
        id="unrelated"
        name="degree"
        value="Var (Alakasız Alan)"
      />
      <label htmlFor="unrelated">Var (Alakasız Alan)</label>
    </div>
  </div>
);

const DisabilityStatus: React.FC = () => (
  <div>
    <label htmlFor="disability-status">Engellilik Durumu</label>
    <div>
      <input type="radio" id="yes" name="disability-status" value="Evet" />
      <label htmlFor="yes">Evet</label>
    </div>
    <div>
      <input type="radio" id="no" name="disability-status" value="Hayır" />
      <label htmlFor="no">Hayır</label>
    </div>
  </div>
);

const provinces = [
  "Adana",
  "Adıyaman",
  "Afyonkarahisar",
  "Ağrı",
  "Aksaray",
  "Amasya",
  "Ankara",
  "Antalya",
  "Ardahan",
  "Artvin",
  "Aydın",
  "Balıkesir",
  "Bartın",
  "Batman",
  "Bayburt",
  "Bilecik",
  "Bingöl",
  "Bitlis",
  "Bolu",
  "Burdur",
  "Bursa",
  "Çanakkale",
  "Çankırı",
  "Çorum",
  "Denizli",
  "Diyarbakır",
  "Düzce",
  "Edirne",
  "Elazığ",
  "Erzincan",
  "Erzurum",
  "Eskişehir",
  "Gaziantep",
  "Giresun",
  "Gümüşhane",
  "Hakkari",
  "Hatay",
  "Iğdır",
  "Isparta",
  "İstanbul",
  "İzmir",
  "Kahramanmaraş",
  "Karabük",
  "Karaman",
  "Kars",
  "Kastamonu",
  "Kayseri",
  "Kırıkkale",
  "Kırklareli",
  "Kırşehir",
  "Kilis",
  "Kocaeli",
  "Konya",
  "Kütahya",
  "Malatya",
  "Manisa",
  "Mardin",
  "Mersin",
  "Muğla",
  "Muş",
  "Nevşehir",
  "Niğde",
  "Ordu",
  "Osmaniye",
  "Rize",
  "Sakarya",
  "Samsun",
  "Şanlıurfa",
  "Siirt",
  "Sinop",
  "Şırnak",
  "Sivas",
  "Tekirdağ",
  "Tokat",
  "Trabzon",
  "Tunceli",
  "Uşak",
  "Van",
  "Yalova",
  "Yozgat",
  "Zonguldak",
];

const Province: React.FC = () => (
  <div>
    <label htmlFor="province">Bulunduğunuz İl</label>
    <select id="province" name="province">
      {provinces.map((province) => (
        <option key={province} value={province}>
          {province}
        </option>
      ))}
    </select>
  </div>
);

const jobTitles = [
  "Yazılım Geliştirici",
  "Proje Yöneticisi",
  "Sistem Yöneticisi",
  "Veri Analisti",
  "Ürün Yöneticisi",
  "Teknik Destek Uzmanı",
  "Ağ Mühendisi",
  "Mobil Geliştirici",
  "Web Geliştirici",
  "Full-Stack Geliştirici",
  "UX/UI Tasarımcısı",
  "İş Analisti",
  "Veritabanı Yöneticisi",
  "Bulut Mühendisi",
  "Yapay Zeka Uzmanı",
  "Siber Güvenlik Uzmanı",
  "DevOps Mühendisi",
  "Diğer",
];

const JobTitle: React.FC = () => (
  <div>
    <label htmlFor="job-title">Mevcut/Son İşinizdeki Ünvanınız</label>
    <select id="job-title" name="job-title">
      {jobTitles.map((title) => (
        <option key={title} value={title}>
          {title}
        </option>
      ))}
    </select>
  </div>
);

const WorkType: React.FC = () => (
  <div>
    <label htmlFor="work-type">Çalışma Türü</label>
    <div>
      <input type="radio" id="full-time" name="work-type" value="Full-Time" />
      <label htmlFor="full-time">Full-Time</label>
    </div>
    <div>
      <input type="radio" id="part-time" name="work-type" value="Part-Time" />
      <label htmlFor="part-time">Part-Time</label>
    </div>
    <div>
      <input type="radio" id="freelance" name="work-type" value="Freelance" />
      <label htmlFor="freelance">Freelance</label>
    </div>
  </div>
);

const WorkSetting: React.FC = () => (
  <div>
    <label htmlFor="work-setting">Çalışma Ortamı</label>
    <div>
      <input type="radio" id="office" name="work-setting" value="Office" />
      <label htmlFor="office">Ofis</label>
    </div>
    <div>
      <input type="radio" id="hybrid" name="work-setting" value="Hybrid" />
      <label htmlFor="hybrid">Hibrit</label>
    </div>
    <div>
      <input
        type="radio"
        id="remote-turkey"
        name="work-setting"
        value="Remote (Turkey)"
      />
      <label htmlFor="remote-turkey">Uzaktan (Türkiye)</label>
    </div>
    <div>
      <input
        type="radio"
        id="remote-abroad"
        name="work-setting"
        value="Remote (Abroad)"
      />
      <label htmlFor="remote-abroad">Uzaktan (Yurt Dışı)</label>
    </div>
  </div>
);

const CompanyLocation: React.FC = () => (
  <div>
    <label htmlFor="company-location">Şirket Lokasyonu</label>
    <select id="company-location" name="company-location">
      {provinces.map((province) => (
        <option key={province} value={province}>
          {province}
        </option>
      ))}
      <option value="aboard">Yurt Dışı</option>
    </select>
  </div>
);

const CompanySize: React.FC = () => (
  <div>
    <label htmlFor="company-size">Şirket Büyüklüğü</label>
    <div>
      <input type="radio" id="size-1-10" name="company-size" value="1-10" />
      <label htmlFor="size-1-10">1-10</label>
    </div>
    <div>
      <input type="radio" id="size-11-50" name="company-size" value="11-50" />
      <label htmlFor="size-11-50">11-50</label>
    </div>
    <div>
      <input type="radio" id="size-51-200" name="company-size" value="51-200" />
      <label htmlFor="size-51-200">51-200</label>
    </div>
    <div>
      <input
        type="radio"
        id="size-201-500"
        name="company-size"
        value="201-500"
      />
      <label htmlFor="size-201-500">201-500</label>
    </div>
    <div>
      <input
        type="radio"
        id="size-501-1000"
        name="company-size"
        value="501-1000"
      />
      <label htmlFor="size-501-1000">501-1000</label>
    </div>
    <div>
      <input
        type="radio"
        id="size-1000-plus"
        name="company-size"
        value="1000+"
      />
      <label htmlFor="size-1000-plus">1000+</label>
    </div>
  </div>
);

const CompanyMarket: React.FC = () => (
  <div>
    <label htmlFor="company-market">Şirket Pazarı</label>
    <div>
      <input type="radio" id="local" name="company-market" value="Local" />
      <label htmlFor="local">Yerel</label>
    </div>
    <div>
      <input
        type="radio"
        id="regional"
        name="company-market"
        value="Regional"
      />
      <label htmlFor="regional">Bölgesel</label>
    </div>
    <div>
      <input type="radio" id="global" name="company-market" value="Global" />
      <label htmlFor="global">Küresel</label>
    </div>
  </div>
);

const Salary: React.FC = () => (
  <div>
    <label htmlFor="salary">Yıllık Maaş (TRY, Vergiler Dahil)</label>
    <input type="number" id="salary" name="salary" min="0" />
  </div>
);

const SalaryCurrency: React.FC = () => (
  <div>
    <label htmlFor="salary-currency">Maaş Para Birimi</label>
    <div>
      <input type="radio" id="try" name="salary-currency" value="TRY" />
      <label htmlFor="try">TRY</label>
    </div>
    <div>
      <input type="radio" id="usd" name="salary-currency" value="USD" />
      <label htmlFor="usd">USD</label>
    </div>
    <div>
      <input type="radio" id="euro" name="salary-currency" value="EURO" />
      <label htmlFor="euro">EURO</label>
    </div>
    <div>
      <input type="radio" id="other" name="salary-currency" value="Other" />
      <label htmlFor="other">Diğer</label>
    </div>
  </div>
);

const languages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "Ruby",
  "Go",
  "Swift",
  "Kotlin",
  "PHP",
  "TypeScript",
  "Dart",
  "Rust",
];

const ProgrammingLanguages: React.FC = () => (
  <div>
    <label>Kullanılan Programlama Dilleri (uygulanabilir ise)</label>
    <div>
      {languages.map((language) => (
        <div key={language}>
          <input
            type="checkbox"
            id={language}
            name="programming-languages"
            value={language}
          />
          <label htmlFor={language}>{language}</label>
        </div>
      ))}
    </div>
  </div>
);

const cloudProviders = [
  "AWS",
  "Google Cloud",
  "Azure",
  "IBM Cloud",
  "Oracle Cloud",
  "DigitalOcean",
  "Heroku",
  "Alibaba Cloud",
];

const CloudProvider: React.FC = () => (
  <div>
    <label>Kullanılan Bulut Sağlayıcısı (uygulanabilir ise)</label>
    <div>
      {cloudProviders.map((provider) => (
        <div key={provider}>
          <input
            type="checkbox"
            id={provider}
            name="cloud-provider"
            value={provider}
          />
          <label htmlFor={provider}>{provider}</label>
        </div>
      ))}
    </div>
  </div>
);

const databases = [
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "SQLite",
  "Oracle",
  "Microsoft SQL Server",
  "Firebase",
  "Redis",
  "Cassandra",
  "MariaDB",
  "Elasticsearch",
];

const Databases: React.FC = () => (
  <div>
    <label>Kullanılan Veritabanları (uygulanabilir ise)</label>
    <div>
      {databases.map((database) => (
        <div key={database}>
          <input
            type="checkbox"
            id={database}
            name="databases"
            value={database}
          />
          <label htmlFor={database}>{database}</label>
        </div>
      ))}
    </div>
  </div>
);

const backEndFrameworks = [
  "Node.js",
  "Express",
  "Django",
  "Flask",
  "Spring",
  "Ruby on Rails",
  "ASP.NET",
  "Laravel",
  "Koa",
  "NestJS",
  "Phoenix",
  "FastAPI",
];

const BackEndFrameworks: React.FC = () => (
  <div>
    <label>Kullanılan Back-end Frameworkleri (uygulanabilir ise)</label>
    <div>
      {backEndFrameworks.map((framework) => (
        <div key={framework}>
          <input
            type="checkbox"
            id={framework}
            name="back-end-frameworks"
            value={framework}
          />
          <label htmlFor={framework}>{framework}</label>
        </div>
      ))}
    </div>
  </div>
);

const frontEndFrameworks = [
  "React",
  "Angular",
  "Vue",
  "Svelte",
  "Ember",
  "Backbone",
  "Next.js",
  "Nuxt.js",
  "Gatsby",
  "Bootstrap",
  "Foundation",
];

const FrontEndFrameworks: React.FC = () => (
  <div>
    <label>Kullanılan Front-end Frameworkleri (uygulanabilir ise)</label>
    <div>
      {frontEndFrameworks.map((framework) => (
        <div key={framework}>
          <input
            type="checkbox"
            id={framework}
            name="front-end-frameworks"
            value={framework}
          />
          <label htmlFor={framework}>{framework}</label>
        </div>
      ))}
    </div>
  </div>
);

const CompanySatisfaction: React.FC = () => (
  <div>
    <label htmlFor="company-satisfaction">Şirket Memnuniyeti</label>
    <div>
      <input
        type="radio"
        id="satisfaction-1"
        name="company-satisfaction"
        value="1"
      />
      <label htmlFor="satisfaction-1">1</label>
    </div>
    <div>
      <input
        type="radio"
        id="satisfaction-2"
        name="company-satisfaction"
        value="2"
      />
      <label htmlFor="satisfaction-2">2</label>
    </div>
    <div>
      <input
        type="radio"
        id="satisfaction-3"
        name="company-satisfaction"
        value="3"
      />
      <label htmlFor="satisfaction-3">3</label>
    </div>
    <div>
      <input
        type="radio"
        id="satisfaction-4"
        name="company-satisfaction"
        value="4"
      />
      <label htmlFor="satisfaction-4">4</label>
    </div>
    <div>
      <input
        type="radio"
        id="satisfaction-5"
        name="company-satisfaction"
        value="5"
      />
      <label htmlFor="satisfaction-5">5</label>
    </div>
  </div>
);

const RoleSatisfaction: React.FC = () => (
  <div>
    <label htmlFor="role-satisfaction">Rol Memnuniyeti</label>
    <div>
      <input
        type="radio"
        id="role-satisfaction-1"
        name="role-satisfaction"
        value="1"
      />
      <label htmlFor="role-satisfaction-1">1</label>
    </div>
    <div>
      <input
        type="radio"
        id="role-satisfaction-2"
        name="role-satisfaction"
        value="2"
      />
      <label htmlFor="role-satisfaction-2">2</label>
    </div>
    <div>
      <input
        type="radio"
        id="role-satisfaction-3"
        name="role-satisfaction"
        value="3"
      />
      <label htmlFor="role-satisfaction-3">3</label>
    </div>
    <div>
      <input
        type="radio"
        id="role-satisfaction-4"
        name="role-satisfaction"
        value="4"
      />
      <label htmlFor="role-satisfaction-4">4</label>
    </div>
    <div>
      <input
        type="radio"
        id="role-satisfaction-5"
        name="role-satisfaction"
        value="5"
      />
      <label htmlFor="role-satisfaction-5">5</label>
    </div>
  </div>
);

const SalarySatisfaction: React.FC = () => (
  <div>
    <label htmlFor="salary-satisfaction">Maaş Memnuniyeti</label>
    <div>
      <input
        type="radio"
        id="salary-satisfaction-1"
        name="salary-satisfaction"
        value="1"
      />
      <label htmlFor="salary-satisfaction-1">1</label>
    </div>
    <div>
      <input
        type="radio"
        id="salary-satisfaction-2"
        name="salary-satisfaction"
        value="2"
      />
      <label htmlFor="salary-satisfaction-2">2</label>
    </div>
    <div>
      <input
        type="radio"
        id="salary-satisfaction-3"
        name="salary-satisfaction"
        value="3"
      />
      <label htmlFor="salary-satisfaction-3">3</label>
    </div>
    <div>
      <input
        type="radio"
        id="salary-satisfaction-4"
        name="salary-satisfaction"
        value="4"
      />
      <label htmlFor="salary-satisfaction-4">4</label>
    </div>
    <div>
      <input
        type="radio"
        id="salary-satisfaction-5"
        name="salary-satisfaction"
        value="5"
      />
      <label htmlFor="salary-satisfaction-5">5</label>
    </div>
  </div>
);

const Form: React.FC = () => (
  <form className="mx-auto max-w-2xl flex flex-col gap-6 p-8">
    <h2 className="font-bold">Kişisel Bilgiler</h2>
    <Age />
    <Gender />
    <ExperienceYears />
    <Degree />
    <DisabilityStatus />
    <Province />
    <hr />
    <h2 className="font-bold">Mevcut/Son İş Deneyimi</h2>
    <JobTitle />
    <WorkType />
    <WorkSetting />
    <CompanyLocation />
    <CompanySize />
    <CompanyMarket />
    <Salary />
    <SalaryCurrency />
    <hr />
    <h2 className="font-bold">Teknoloji Bilgisi</h2>
    <ProgrammingLanguages />
    <CloudProvider />
    <Databases />
    <BackEndFrameworks />
    <FrontEndFrameworks />
    <hr />
    <h2 className="font-bold">İş Tatmini</h2>
    <CompanySatisfaction />
    <RoleSatisfaction />
    <SalarySatisfaction />
    <hr />
  </form>
);

export default Form;
