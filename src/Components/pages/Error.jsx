export default function Example() {
  return (
    <>
      <section className="grid h-[600px] place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center" style={{ gap: "3rem" }}>
          <p className="text-5xl font-semibold text-purple-900">404</p>
          <h1
            className="mt-4 text-2xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl"
            style={{ margin: "2rem" }}
          >
            Səhifə tapılmadı
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"
          style={{marginBottom: "1rem"}}>
            Üzr istəyirik, axtardığınız səhifəni tapa bilmədik.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-purple-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-purple-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              style={{ padding: "1rem" }}
            >
              Ana səhifəyə qayıt
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Ətraflı məlumat
              <span aria-hidden="true"
              style={{ marginLeft: "0.5rem" }}
              >&rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
