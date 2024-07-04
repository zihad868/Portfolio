const Skill = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-3xl font-semibold text-center mt-10">Skill</h2>
      <div className="grid md:grid-cols-2">
      <div>
        <h1 className="text-2xl font-medium mt-5 mb-3 sm:text-center">Frontend</h1>
        <div className="flex space-x-5">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5" className="h-16 md:h-12" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS3" className="h-16 md:h-12" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" className="h-16 md:h-12" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="h-16 md:h-12" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" className="h-16 md:h-12" />
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-medium mt-5 mb-3 sm:text-center">Backend</h1>
        <div className="flex space-x-3">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" className="h-16 md:h-10" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg" alt="Django" className="h-16 md:h-10" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" className="h-16 md:h-10" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Express" className="h-16 md:h-10" />
        </div>
      </div>
      </div>

      <div className="">
      <h1 className="text-2xl font-medium mt-5 mb-3 sm:text-center">Database</h1>
        <div className="flex space-x-5">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" alt="SQL" className="h-16 md:h-10" />
        <img src="https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" alt="MySQL" className="h-16 md:h-10" />
        <img src="https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg" alt="MongoDB" className="h-16 md:h-10" />
        </div>
      </div>
    </div>
  );
};

export default Skill;
