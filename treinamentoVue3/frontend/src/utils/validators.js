const validate = {
  Name: value => {
    if (!value) {
      return '*Este campo é obrigatório'
    }

    const isValid = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
      value
    )

    if (!isValid) {
      return '*Este campo precisa ser um e-mail'
    }

    return true
  },

  Pass: value => {
    if (!value) {
      return '*Este campo é obrigatório'
    }

    if (value.length < 8) {
      return '*Este campo precisa de no mínimo 8 caracteres'
    }

    return true
  },

  Email: value => {
    if (!value) {
      return '*Este campo é obrigatório'
    }

    const isValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(value)

    if (!isValid) {
      return '*Este campo precisa ser um e-mail'
    }

    return true
  }
}
export default validate
