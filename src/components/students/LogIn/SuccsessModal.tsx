
type succsessModal = {
  text: string,
  action: string
}

const SuccsessModal = ({ text, action }: succsessModal) => {
  return (
    <div
      className=" absolute right-2 top-20 bg-white/60 rounded-md backdrop-blur-lg px-8 py-10 text-right">
      <p>{text}</p>
      <p>{action}</p>
    </div>
  )
}

export default SuccsessModal