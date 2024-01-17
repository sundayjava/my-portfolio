const Footer = () => {
    const date = new Date();
  return (
    <div className="w-full flex flex-wrap lg:px-28 sm:px-24 px-5 gap-5 bg-gray-300 dark:bg-gray-800 justify-center items-center py-5">
      <p>&copy; Copyright {date.getFullYear()} || Sunday David Udoekong Portfolio</p>
      <p className="ps-2">🛐 Ebebit, Afaha Obong, Abak L.G.A, Akwa Ibom State, Nigeria</p>
      <p className="ps-2">Education = Higher National Diploma (HND)</p>
    </div>
  )
}

export default Footer
