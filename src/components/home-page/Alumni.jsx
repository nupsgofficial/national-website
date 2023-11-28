import Button from './Button'

const Alumni = () => {
  return (
    <section className="container mx-auto text-color-1  md:px-12 font-poppins  mb-8  ">
      <div className="bg-gradient-to-r from-primary to-blue-700 rounded-2xl p-4 text-center space-y-4">
        <p>
          Connect to the alumni body. Support us in building the church and
          improving gatherings during national services.
        </p>

        <Button label={'Contact us'} color={'bg-primary'} />
      </div>
    </section>
  )
}

export default Alumni
