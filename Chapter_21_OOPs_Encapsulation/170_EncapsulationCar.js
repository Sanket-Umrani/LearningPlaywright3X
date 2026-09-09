class Car{
    #engine;
    constructor(modelName,engineName)
    {
        this.name=modelName;
        this.#engine=engineName;
    }
    getEngine()
    {
        return this.#engine;
    }
    setEngine(newEngineName)
    {
        this.#engine=newEngineName
    }

}
let brand=new Car("TESLA","V8");
console.log(brand.getEngine());
brand.setEngine("V9");
console.log(brand.getEngine());