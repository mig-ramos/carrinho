export function Cart() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">Meu carrrinho</h1>
      <section className="flex items-center justify-between border-b-2 border-gray-300">
        <img
          src="https://a-static.mlcdn.com.br/800x560/fone-de-ouvido-esportivo-bluetooth-philips-tat1235bk-97-true-wireless-com-microfone-preto/magazineluiza/228062000/14d2a8eef7c36d9c154ef2971cb5b608.jpg"
          alt="Logo produto"
          className="w-28"
        />
        <strong>Preço: 1.000,00</strong>
        <div className="flex items-center justify-center gap-3">
          <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
            -
          </button>
          1
          <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
            +
          </button>
        </div>
        <strong className="float-right">SubTotal: 1.000,00</strong>
      </section>
      <p className="font-bold mt-4">Total: 1.000,00</p>
    </div>
  );
}
