export type System ={
  info: {
      OS: string,
      Host: string,
      Shell: string,
      DE: string,
      WMTheme: string,
      Icons:string,
      CPU: string,
      GPU: string,
      Ram: string,
  },
  date: string
}


 type Systems = System[]


export default Systems