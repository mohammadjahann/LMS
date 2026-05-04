
type companyData = {
  src: string,
  alt: string,
}

const companiesData: companyData[] = [
  { src: './src/assets/microsoft_logo.svg', alt: 'microsoft' },
  { src: './src/assets/walmart_logo.svg', alt: 'walmart' },
  { src: './src/assets/accenture_logo.svg', alt: 'accenture' },
  { src: './src/assets/adobe_logo.svg', alt: 'adobe' },
  { src: './src/assets/paypal_logo.svg', alt: 'paypal' },

]

const Companies = () => {
  return (
    <div
      className=" pt-16">

      <p
        className=" text-default text-gray-500">
        مورد اعتماد معتبر ترین شرکت ها
      </p>

      <div
        className="flex flex-wrap items-center justify-center gap-6 md:gap-16 mt-5 md:mt-10">

        {companiesData.map((company,i) => (
          <img key={i} src={company.src} alt={company.alt} />
        ))}

      </div>

    </div>
  )
}

export default Companies