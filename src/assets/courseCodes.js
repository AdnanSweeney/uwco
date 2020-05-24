let courseList = ["AB", "ACC", "ACINTY", "ACTSC", "AFM", "AHS", "AMATH", "ANTH", "APPLS", "ARBUS", "ARCH", "ARCHL", "ARTS", "ASTRN", "AVIA", "BASE", "BE", "BET", "BIOL", "BME", "BUS", "CHE", "CHEM", "CHINA", "CIVE", "CLAS", "CM", "CMW", "CO", "COGSCI", "COMM", "COMST", "COOP", "CRGC", "CROAT", "CS", "CT", "DAC", "DEI", "DRAMA", "DUTCH", "EARTH", "EASIA", "ECDEV", "ECE", "ECON", "EFAS", "ELPE", "EMLS", "ENBUS", "ENGL", "ENTR", "ENVE", "ENVS", "ERS", "FILM", "FINE", "FR", "GBDA", "GEMCC", "GENE", "GEOE", "GEOG", "GER", "GERON", "GGOV", "GLOBAL", "GRK", "GS", "HIST", "HLTH", "HRM", "HUMN", "HUMSC", "INDEV", "INTEG", "INTERN", "INTST", "INTTS", "IS", "ITAL", "ITALST", "JAPAN", "JS", "KIN", "KOREA", "KPE", "LANG", "LAT", "LED", "LS", "MATBUS", "MATH", "ME", "MEDVL", "MISC", "MNS", "MSCI", "MTE", "MTHEL", "MUSIC", "NANO", "NATST", "NE", "OPTOM", "PACS", "PD", "PDARCH", "PDPHRM", "PHARM", "PHIL", "PHS", "PHYS", "PLAN", "PLCG", "PMATH", "PORT", "PS", "PSCI", "PSYCH", "QIC", "REC", "REES", "RELC", "RS", "RSCH", "RUSS", "SCBUS", "SCI", "SDS", "SE", "SEQ", "SI", "SMF", "SOC", "SOCE", "SOCIN", "SOCWK", "SPAN", "SPCOM", "STAT", "STV", "SUSM", "SVENT", "SWK", "SWREN", "SYDE", "TAX", "TN", "TOUR", "TPM", "TS", "UN", "UNIV", "UU", "VCULT", "WATER", "WHMIS", "WKRPT", "WS"]

let courseOptions = []

courseList.forEach(courseCode => {

    courseOptions.push( {value: courseCode, label: courseCode} )
    
  });

export {courseOptions}