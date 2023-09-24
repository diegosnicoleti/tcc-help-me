export default function View(){
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-lg px-2">
          <p className="mt-10 text-gray-800 font-bold text-base">
            Encontre seu psicólogo
          </p>

          <div className="flex mt-5">
            <div className="flex mr-8">
              <p className="text-gray-700 font-bold mr-2">UF:</p>
              <select id="countries" className="bg-white h-30 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500">
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>

            <div className="flex mr-8">
              <p className="text-gray-700 font-bold mr-2">Cidade:</p>
                <select id="countries" className="bg-white h-30 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500">
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
            </div>

            <div className="flex mr-8">
              <p className="text-gray-700 font-bold mr-2">Especialidade/transtorno:</p>
                <select id="countries" className="bg-white h-30 border border-gray-600 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500">
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}