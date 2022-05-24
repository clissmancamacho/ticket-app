import moment from 'moment'

export const capitalize = (s) => {
  if (typeof s !== `string`) return ``

  s = s
    .toLowerCase()
    .split(` `)
    .map((item) => item.replace(/^./, (l) => l.toUpperCase()))
  return s.join(` `)
}

export const capitalizeOnlyFirstWord = (s) => s[0].toUpperCase() + s.slice(1).toLowerCase()
export const getFullSurnames = (person) =>
  capitalize(
    `${person[`apellido paterno`] || person.apellido_paterno || ``} ${
      person[`apellido materno`] || person.apellido_materno || ``
    }`,
  )

export const getFullName = (person) =>
  capitalize(
    `${person.nombres} ${person[`apellido paterno`] || person.apellido_paterno || ``} 
      ${person[`apellido materno`] || person.apellido_materno || ``}`,
  )
export const getFullNameUnderscore = (person) =>
  capitalize(`${person.nombres} ${person.apellido_paterno} 
    ${person.apellido_materno}`)

export const renderCalificacionSocioEconomica = (texto, cse) => {
  let calificacionSocioEconomica = `${texto}0% al 40%`
  if (cse > 40 && cse <= 50) calificacionSocioEconomica = `${texto}41% al 50%`
  else if (cse > 50 && cse <= 60) calificacionSocioEconomica = `${texto}51% al 60%`
  else if (cse > 60 && cse <= 70) calificacionSocioEconomica = `${texto}61% al 70%`
  else if (cse > 70 && cse <= 80) calificacionSocioEconomica = `${texto}71% al 80%`
  else if (cse > 80 && cse <= 90) calificacionSocioEconomica = `${texto}81% al 90%`
  else if (cse > 90) calificacionSocioEconomica = `${texto}91% al 100%`
  return calificacionSocioEconomica
}

export function capitalizeFirstLetter(word) {
  return word.replace(/\w/, (l) => l.toUpperCase())
}
export function fecha(f) {
  f = `${f}`
  return `${f.slice(6, 8)}/${f.slice(4, 6)}/${f.slice(0, 4)}`
}

export function fecha2(f) {
  f = `${f}`
  return `${f.slice(0, 4)}/${f.slice(4, 6)}/${f.slice(6, 8)}`
}

export const createDateObject = (date, isFormated) => {
  const [day, month, year] = isFormated ? date.split(`/`) : fecha(date).split(`/`)
  return new Date(year, month, day)
}

export const formatFilters = (array) => array.map((elem) => ({ text: elem, value: elem }))

export const formatTimestamp = (timeStamp) => (timeStamp ? timeStamp.replace(/-/g, '') : ``)
export const ordenarCronologicamente = (dateA, dateB) => (dateA > dateB ? 1 : -1)
// TODO: encontrar una forma para darle prioridad a los que tienen valor por sobre los null
// es decir que ponga primero todos los que tienen valor en base al sort y luego los sin valor
export const ordenarCronologicamenteTwo = (dateA, dateB) => {
  const cleanDateA = fecha2(formatTimestamp(dateA))
  const cleanDateB = fecha2(formatTimestamp(dateB))
  return cleanDateA > cleanDateB ? 1 : -1
}

export const getMonth = (numberDate) => parseInt(numberDate.toString().substring(4, 7), 10)

export const getFechaFormat = (fecha, format = `MMMM-YYYY`) => moment(fecha).format(format)

export const cleanString = (cadena) => {
  if (cadena) {
    const specialChars = `!@#$^&%*()+=-[]/{}|:<>?,.`
    // eslint-disable-next-line
    for (let i = 0; i < specialChars.length; i++) {
      cadena = cadena.replace(new RegExp(`\\${specialChars[i]}`, `gi`), ``)
    }

    cadena = cadena.toLowerCase()

    cadena = cadena.replace(/ /g, `_`)

    cadena = cadena.replace(/á/gi, `a`)
    cadena = cadena.replace(/é/gi, `e`)
    cadena = cadena.replace(/í/gi, `i`)
    cadena = cadena.replace(/ó/gi, `o`)
    cadena = cadena.replace(/ú/gi, `u`)
    cadena = cadena.replace(/ñ/gi, `n`)
    return cadena
  }

  return ``
}
export const thounsandSeparator = (text) => text && text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, `.`)
export const validateRol = (user, userType) => {
  const finalUserType = capitalize(userType)
  if (finalUserType === `Ciudadano`) {
    return { userType: `Ciudadano`, roles: user.roles }
  }
  if (finalUserType === `Ciudadano_serial`) {
    return { userType: `Ciudadano_serial`, roles: [finalUserType] }
  }
  if (finalUserType === `Admin` && user.roles.includes(`Admin`)) {
    return { userType: `Admin`, roles: user.roles }
  }
  if (finalUserType === `Chileatiende` && user.roles.includes(`Chileatiende`)) {
    return { userType: `Chileatiende`, roles: user.roles }
  }
  if (finalUserType === `Instituciones` && user.roles.includes(`Instituciones`)) {
    return { userType: `Instituciones`, roles: user.roles }
  }
  if (
    finalUserType === `Asesor` &&
    ((!user.roles.includes(`Ciudadano`) && !user.roles.includes(`Ciudadano_serial`)) || user.roles.length > 1)
  ) {
    return { userType: `Asesor`, roles: [...user.roles, `Asesor`] }
  }
  return { userType: finalUserType, roles: [] }
}

export const edad = (FechaNacimiento) => {
  const fechaNace = new Date(FechaNacimiento)
  const fechaActual = new Date()
  const mes = fechaActual.getMonth()
  const dia = fechaActual.getDate()
  const año = fechaActual.getFullYear()

  fechaActual.setDate(dia)
  fechaActual.setMonth(mes)
  fechaActual.setFullYear(año)

  const edad = Math.floor((fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365)
  if (fechaNace.getMonth() === mes && dia < fechaNace.getDate() && fechaNace.getDate() <= 13) {
    return edad - 1
  }
  return edad
}

export const urlsByUserTypeDashboard = {
  admin: `/admin/dashboard`,
  asesor: `/asesor/dashboard`,
  ciudadano: `/ciudadano/dashboard`,
  ciudadano_serial: `/ciudadano-serial/dashboard`,
}

export const getEventBreadcrumb = (event) => {
  if (event === `educacion`) {
    return `Educación`
  }

  if (event === `personasMayores`) {
    return `Personas Mayores`
  }

  return event
}
