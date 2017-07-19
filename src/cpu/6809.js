[
{"mnem":["LDY #","w"], "code":"108Ewmwl", "clocks":"4", "bus":"", "flags":"-aa0-"},
{"mnem":["NEG <","p"], "code":"00pp", "clocks":"6", "bus":"", "flags":"uaaaa", "dp":true},
{"mnem":["COM <","p"], "code":"03pp", "clocks":"6", "bus":"", "flags":"-aa01", "dp":true},
{"mnem":["LSR <","p"], "code":"04pp", "clocks":"6", "bus":"", "flags":"-0a-s", "dp":true},
{"mnem":["ROR <","p"], "code":"06pp", "clocks":"6", "bus":"", "flags":"-aa-s", "dp":true},
{"mnem":["ASR <","p"], "code":"07pp", "clocks":"6", "bus":"", "flags":"uaa-s", "dp":true},
{"mnem":["LSL <","p"], "code":"08pp", "clocks":"6", "bus":"", "flags":"naaas", "dp":true},
{"mnem":["ASL <","p"], "code":"08pp", "clocks":"6", "bus":"", "flags":"naaas", "dp":true},
{"mnem":["ROL <","p"], "code":"09pp", "clocks":"6", "bus":"", "flags":"-aaas", "dp":true},
{"mnem":["DEC <","p"], "code":"0App", "clocks":"6", "bus":"", "flags":"-aaa-", "dp":true},
{"mnem":["INC <","p"], "code":"0Cpp", "clocks":"6", "bus":"", "flags":"-aaa-", "dp":true},
{"mnem":["TST <","p"], "code":"0Dpp", "clocks":"6", "bus":"", "flags":"-aa0-", "dp":true},
{"mnem":["JMP <","p"], "code":"0Epp", "clocks":"3", "bus":"", "flags":"-----", "dp":true},
{"mnem":["CLR <","p"], "code":"0Fpp", "clocks":"6", "bus":"", "flags":"-0100", "dp":true},
{"mnem":["LBRN ","s"], "code":"1021smsl", "clocks":"5(6)", "bus":"", "flags":"-----"},
{"mnem":["LBHI ","s"], "code":"1022smsl", "clocks":"5(6)", "bus":"", "flags":"-----"},
{"mnem":["LBLS ","s"], "code":"1023smsl", "clocks":"5(6)", "bus":"", "flags":"-----"},
{"mnem":["LBCC ","s"], "code":"1024smsl", "clocks":"5(6)", "bus":"", "flags":"-----"},
{"mnem":["LBHS ","s"], "code":"1024smsl", "clocks":"5(6)", "bus":"", "flags":"-----"},
{"mnem":["LBCS ","s"], "code":"1025smsl", "clocks":"5(6)", "bus":"", "flags":"-----"},
{"mnem":["LBLO ","s"], "code":"1025smsl", "clocks":"5(6)", "bus":"", "flags":"-----"},
{"mnem":["LBNE ","s"], "code":"1026smsl", "clocks":"5(6)", "bus":"", "flags":"-----"},
{"mnem":["LBEQ ","s"], "code":"1027smsl", "clocks":"5(6)", "bus":"", "flags":"-----"},
{"mnem":["LBVC ","s"], "code":"1028smsl", "clocks":"5(6)", "bus":"", "flags":"-----"},
{"mnem":["LBVS ","s"], "code":"1029smsl", "clocks":"5(6)", "bus":"", "flags":"-----"},
{"mnem":["LBPL ","s"], "code":"102Asmsl", "clocks":"5(6)", "bus":"", "flags":"-----"},
{"mnem":["LBMI ","s"], "code":"102Bsmsl", "clocks":"5(6)", "bus":"", "flags":"-----"},
{"mnem":["LBGE ","s"], "code":"102Csmsl", "clocks":"5(6)", "bus":"", "flags":"-----"},
{"mnem":["LBLT ","s"], "code":"102Dsmsl", "clocks":"5(6)", "bus":"", "flags":"-----"},
{"mnem":["LBGT ","s"], "code":"102Esmsl", "clocks":"5(6)", "bus":"", "flags":"-----"},
{"mnem":["LBLE ","s"], "code":"102Fsmsl", "clocks":"5(6)", "bus":"", "flags":"-----"},
{"mnem":["SWI2"], "code":"103F", "clocks":"20", "bus":"", "flags":"-----"},
{"mnem":["CMPD #","w"], "code":"1083wmwl", "clocks":"5", "bus":"", "flags":"-aaaa"},
{"mnem":["CMPY #","w"], "code":"108Cwmwl", "clocks":"5", "bus":"", "flags":"-aaaa"},
{"mnem":["CMPD <","p"], "code":"1093pp", "clocks":"7", "bus":"", "flags":"-aaaa", "dp":true},
{"mnem":["CMPY <","p"], "code":"109Cpp", "clocks":"7", "bus":"", "flags":"-aaaa", "dp":true},
{"mnem":["LDY <","p"], "code":"109Epp", "clocks":"6", "bus":"", "flags":"-aa0-", "dp":true},
{"mnem":["STY <","p"], "code":"109Fpp", "clocks":"6", "bus":"", "flags":"-aa0-", "dp":true},
{"mnem":["CMPD ","y"], "code":"10A3yy", "clocks":"7", "bus":"", "flags":"-aaaa"},
{"mnem":["CMPY ","y"], "code":"10ACyy", "clocks":"7", "bus":"", "flags":"-aaaa"},
{"mnem":["LDY ","y"], "code":"10AEyy", "clocks":"6", "bus":"", "flags":"-aa0-"},
{"mnem":["STY ","y"], "code":"10AFyy", "clocks":"6", "bus":"", "flags":"-aa0-"},
{"mnem":["CMPD ","t"], "code":"10B3tmtl", "clocks":"8", "bus":"", "flags":"-aaaa"},
{"mnem":["CMPY ","t"], "code":"10BCtmtl", "clocks":"8", "bus":"", "flags":"-aaaa"},
{"mnem":["LDY ","t"], "code":"10BEtmtl", "clocks":"7", "bus":"", "flags":"-aa0-"},
{"mnem":["STY ","t"], "code":"10BFtmtl", "clocks":"7", "bus":"", "flags":"-aa0-"},
{"mnem":["LDS #","w"], "code":"10CEwmwl", "clocks":"4", "bus":"", "flags":"-aa0-"},
{"mnem":["LDS <","p"], "code":"10DEpp", "clocks":"6", "bus":"", "flags":"-aa0-", "dp":true},
{"mnem":["STS <","p"], "code":"10DFpp", "clocks":"6", "bus":"", "flags":"-aa0-", "dp":true},
{"mnem":["LDS ","y"], "code":"10EEyy", "clocks":"6", "bus":"", "flags":"-aa0-"},
{"mnem":["STS ","y"], "code":"10EFyy", "clocks":"6", "bus":"", "flags":"-aa0-"},
{"mnem":["LDS ","t"], "code":"10FEtmtl", "clocks":"7", "bus":"", "flags":"-aa0-"},
{"mnem":["STS ","t"], "code":"10FFtmtl", "clocks":"7", "bus":"", "flags":"-aa0-"},
{"mnem":["SWI3"], "code":"113F", "clocks":"20", "bus":"", "flags":"-----"},
{"mnem":["CMPU #","w"], "code":"1183wmwl", "clocks":"5", "bus":"", "flags":"-aaaa"},
{"mnem":["CMPS #","w"], "code":"118Cwmwl", "clocks":"5", "bus":"", "flags":"-aaaa"},
{"mnem":["CMPU <","p"], "code":"1193pp", "clocks":"7", "bus":"", "flags":"-aaaa", "dp":true},
{"mnem":["CMPS <","p"], "code":"119Cpp", "clocks":"7", "bus":"", "flags":"-aaaa", "dp":true},
{"mnem":["CMPU ","y"], "code":"11A3yy", "clocks":"7", "bus":"", "flags":"-aaaa"},
{"mnem":["CMPS ","y"], "code":"11ACyy", "clocks":"7", "bus":"", "flags":"-aaaa"},
{"mnem":["CMPU ","t"], "code":"11B3tmtl", "clocks":"8", "bus":"", "flags":"-aaaa"},
{"mnem":["CMPS ","t"], "code":"11BCtmtl", "clocks":"8", "bus":"", "flags":"-aaaa"},
{"mnem":["NOP"], "code":"12", "clocks":"2", "bus":"", "flags":"-----"},
{"mnem":["SYNC"], "code":"13", "clocks":"2", "bus":"", "flags":"-----"},
{"mnem":["LBRA ","s"], "code":"16smsl", "clocks":"5", "bus":"", "flags":"-----"},
{"mnem":["LBSR ","s"], "code":"17smsl", "clocks":"9", "bus":"", "flags":"-----"},
{"mnem":["DAA"], "code":"19", "clocks":"2", "bus":"", "flags":"-aa0a"},
{"mnem":["ORCC #","b"], "code":"1Abb", "clocks":"3", "bus":"", "flags":"ddddd"},
{"mnem":["ANDCC #","b"], "code":"1Cbb", "clocks":"3", "bus":"", "flags":"ddddd"},
{"mnem":["SEX"], "code":"1D", "clocks":"2", "bus":"", "flags":"-aa0-"},
{"mnem":["EXG ","z"], "code":"1Ezz", "clocks":"8", "bus":"", "flags":"ccccc"},
{"mnem":["TFR ","z"], "code":"1Fzz", "clocks":"7", "bus":"", "flags":"ccccc"},
{"mnem":["BRA ","r"], "code":"20rr", "clocks":"3", "bus":"", "flags":"-----"},
{"mnem":["BRN ","r"], "code":"21rr", "clocks":"3", "bus":"", "flags":"-----"},
{"mnem":["BHI ","r"], "code":"22rr", "clocks":"3", "bus":"", "flags":"-----"},
{"mnem":["BLS ","r"], "code":"23rr", "clocks":"3", "bus":"", "flags":"-----"},
{"mnem":["BCC ","r"], "code":"24rr", "clocks":"3", "bus":"", "flags":"-----"},
{"mnem":["BHS ","r"], "code":"24rr", "clocks":"3", "bus":"", "flags":"-----"},
{"mnem":["BCS ","r"], "code":"25rr", "clocks":"3", "bus":"", "flags":"-----"},
{"mnem":["BLO ","r"], "code":"25rr", "clocks":"3", "bus":"", "flags":"-----"},
{"mnem":["BNE ","r"], "code":"26rr", "clocks":"3", "bus":"", "flags":"-----"},
{"mnem":["BEQ ","r"], "code":"27rr", "clocks":"3", "bus":"", "flags":"-----"},
{"mnem":["BVC ","r"], "code":"28rr", "clocks":"3", "bus":"", "flags":"-----"},
{"mnem":["BVS ","r"], "code":"29rr", "clocks":"3", "bus":"", "flags":"-----"},
{"mnem":["BPL ","r"], "code":"2Arr", "clocks":"3", "bus":"", "flags":"-----"},
{"mnem":["BMI ","r"], "code":"2Brr", "clocks":"3", "bus":"", "flags":"-----"},
{"mnem":["BGE ","r"], "code":"2Crr", "clocks":"3", "bus":"", "flags":"-----"},
{"mnem":["BLT ","r"], "code":"2Drr", "clocks":"3", "bus":"", "flags":"-----"},
{"mnem":["BGT ","r"], "code":"2Err", "clocks":"3", "bus":"", "flags":"-----"},
{"mnem":["BLE ","r"], "code":"2Frr", "clocks":"3", "bus":"", "flags":"-----"},
{"mnem":["LEAX ","y"], "code":"30yy", "clocks":"4", "bus":"", "flags":"--a--"},
{"mnem":["LEAY ","y"], "code":"31yy", "clocks":"4", "bus":"", "flags":"--a--"},
{"mnem":["LEAS ","y"], "code":"32yy", "clocks":"4", "bus":"", "flags":"-----"},
{"mnem":["LEAU ","y"], "code":"33yy", "clocks":"4", "bus":"", "flags":"-----"},
{"mnem":["PSHS ","x"], "code":"34xx", "clocks":"5", "bus":"", "flags":"-----"},
{"mnem":["PULS ","q"], "code":"35qq", "clocks":"5", "bus":"", "flags":"ccccc"},
{"mnem":["PSHU ","u"], "code":"36uu", "clocks":"5", "bus":"", "flags":"-----"},
{"mnem":["PULU ","v"], "code":"37vv", "clocks":"5", "bus":"", "flags":"ccccc"},
{"mnem":["RTS"], "code":"39", "clocks":"5", "bus":"", "flags":"-----"},
{"mnem":["ABX"], "code":"3A", "clocks":"3", "bus":"", "flags":"-----"},
{"mnem":["RTI"], "code":"3B", "clocks":"6/15", "bus":"", "flags":"-----"},
{"mnem":["CWAI ","b"], "code":"3Cbb", "clocks":"21", "bus":"", "flags":"ddddd"},
{"mnem":["MUL"], "code":"3D", "clocks":"11", "bus":"", "flags":"--a-a"},
{"mnem":["RESET"], "code":"3E", "clocks":"*", "bus":"", "flags":"*****"},
{"mnem":["SWI"], "code":"3F", "clocks":"19", "bus":"", "flags":"-----"},
{"mnem":["NEGA"], "code":"40", "clocks":"2", "bus":"", "flags":"uaaaa"},
{"mnem":["COMA"], "code":"43", "clocks":"2", "bus":"", "flags":"-aa01"},
{"mnem":["LSRA"], "code":"44", "clocks":"2", "bus":"", "flags":"-0a-s"},
{"mnem":["RORA"], "code":"46", "clocks":"2", "bus":"", "flags":"-aa-s"},
{"mnem":["ASRA"], "code":"47", "clocks":"2", "bus":"", "flags":"uaa-s"},
{"mnem":["ASLA"], "code":"48", "clocks":"2", "bus":"", "flags":"naaas"},
{"mnem":["LSLA"], "code":"48", "clocks":"2", "bus":"", "flags":"naaas"},
{"mnem":["ROLA"], "code":"49", "clocks":"2", "bus":"", "flags":"-aaas"},
{"mnem":["DECA"], "code":"4A", "clocks":"2", "bus":"", "flags":"-aaa-"},
{"mnem":["INCA"], "code":"4C", "clocks":"2", "bus":"", "flags":"-aaa-"},
{"mnem":["TSTA"], "code":"4D", "clocks":"2", "bus":"", "flags":"-aa0-"},
{"mnem":["CLRA"], "code":"4F", "clocks":"2", "bus":"", "flags":"-0100"},
{"mnem":["NEGB"], "code":"50", "clocks":"2", "bus":"", "flags":"uaaaa"},
{"mnem":["COMB"], "code":"53", "clocks":"2", "bus":"", "flags":"-aa01"},
{"mnem":["LSRB"], "code":"54", "clocks":"2", "bus":"", "flags":"-0a-s"},
{"mnem":["RORB"], "code":"56", "clocks":"2", "bus":"", "flags":"-aa-s"},
{"mnem":["ASRB"], "code":"57", "clocks":"2", "bus":"", "flags":"uaa-s"},
{"mnem":["ASLB"], "code":"58", "clocks":"2", "bus":"", "flags":"naaas"},
{"mnem":["LSLB"], "code":"58", "clocks":"2", "bus":"", "flags":"naaas"},
{"mnem":["ROLB"], "code":"59", "clocks":"2", "bus":"", "flags":"-aaas"},
{"mnem":["DECB"], "code":"5A", "clocks":"2", "bus":"", "flags":"-aaa-"},
{"mnem":["INCB"], "code":"5C", "clocks":"2", "bus":"", "flags":"-aaa-"},
{"mnem":["TSTB"], "code":"5D", "clocks":"2", "bus":"", "flags":"-aa0-"},
{"mnem":["CLRB"], "code":"5F", "clocks":"2", "bus":"", "flags":"-0100"},
{"mnem":["NEG ","y"], "code":"60yy", "clocks":"6", "bus":"", "flags":"uaaaa"},
{"mnem":["COM ","y"], "code":"63yy", "clocks":"6", "bus":"", "flags":"-aa01"},
{"mnem":["LSR ","y"], "code":"64yy", "clocks":"6", "bus":"", "flags":"-0a-s"},
{"mnem":["ROR ","y"], "code":"66yy", "clocks":"6", "bus":"", "flags":"-aa-s"},
{"mnem":["ASR ","y"], "code":"67yy", "clocks":"6", "bus":"", "flags":"uaa-s"},
{"mnem":["ASL ","y"], "code":"68yy", "clocks":"6", "bus":"", "flags":"naaas"},
{"mnem":["LSL ","y"], "code":"68yy", "clocks":"6", "bus":"", "flags":"naaas"},
{"mnem":["ROL ","y"], "code":"69yy", "clocks":"6", "bus":"", "flags":"-aaas"},
{"mnem":["DEC ","y"], "code":"6Ayy", "clocks":"6", "bus":"", "flags":"-aaa-"},
{"mnem":["INC ","y"], "code":"6Cyy", "clocks":"6", "bus":"", "flags":"-aaa-"},
{"mnem":["TST ","y"], "code":"6Dyy", "clocks":"6", "bus":"", "flags":"-aa0-"},
{"mnem":["JMP ","y"], "code":"6Eyy", "clocks":"3", "bus":"", "flags":"-----"},
{"mnem":["CLR ","y"], "code":"6Fyy", "clocks":"6", "bus":"", "flags":"-0100"},
{"mnem":["NEG ","t"], "code":"70tmtl", "clocks":"7", "bus":"", "flags":"uaaaa"},
{"mnem":["COM ","t"], "code":"73tmtl", "clocks":"7", "bus":"", "flags":"-aa01"},
{"mnem":["LSR ","t"], "code":"74tmtl", "clocks":"7", "bus":"", "flags":"-0a-s"},
{"mnem":["ROR ","t"], "code":"76tmtl", "clocks":"7", "bus":"", "flags":"-aa-s"},
{"mnem":["ASR ","t"], "code":"77tmtl", "clocks":"7", "bus":"", "flags":"uaa-s"},
{"mnem":["ASL ","t"], "code":"78tmtl", "clocks":"7", "bus":"", "flags":"naaas"},
{"mnem":["LSL ","t"], "code":"78tmtl", "clocks":"7", "bus":"", "flags":"naaas"},
{"mnem":["ROL ","t"], "code":"79tmtl", "clocks":"7", "bus":"", "flags":"-aaas"},
{"mnem":["DEC ","t"], "code":"7Atmtl", "clocks":"7", "bus":"", "flags":"-aaa-"},
{"mnem":["INC ","t"], "code":"7Ctmtl", "clocks":"7", "bus":"", "flags":"-aaa-"},
{"mnem":["TST ","t"], "code":"7Dtmtl", "clocks":"7", "bus":"", "flags":"-aa0-"},
{"mnem":["JMP ","t"], "code":"7Etmtl", "clocks":"3", "bus":"", "flags":"-----"},
{"mnem":["CLR ","t"], "code":"7Ftmtl", "clocks":"7", "bus":"", "flags":"-0100"},
{"mnem":["SUBA #","b"], "code":"80bb", "clocks":"2", "bus":"", "flags":"uaaaa"},
{"mnem":["CMPA #","b"], "code":"81bb", "clocks":"2", "bus":"", "flags":"uaaaa"},
{"mnem":["SBCA #","b"], "code":"82bb", "clocks":"2", "bus":"", "flags":"uaaaa"},
{"mnem":["SUBD #","w"], "code":"83wmwl", "clocks":"4", "bus":"", "flags":"-aaaa"},
{"mnem":["ANDA #","b"], "code":"84bb", "clocks":"2", "bus":"", "flags":"-aa0-"},
{"mnem":["BITA #","b"], "code":"85bb", "clocks":"2", "bus":"", "flags":"-aa0-"},
{"mnem":["LDA #","b"], "code":"86bb", "clocks":"2", "bus":"", "flags":"-aa0-"},
{"mnem":["EORA #","b"], "code":"88bb", "clocks":"2", "bus":"", "flags":"-aa0-"},
{"mnem":["ADCA #","b"], "code":"89bb", "clocks":"2", "bus":"", "flags":"aaaaa"},
{"mnem":["ORA #","b"], "code":"8Abb", "clocks":"2", "bus":"", "flags":"-aa0-"},
{"mnem":["ADDA #","b"], "code":"8Bbb", "clocks":"2", "bus":"", "flags":"aaaaa"},
{"mnem":["CMPX #","w"], "code":"8Cwmwl", "clocks":"4", "bus":"", "flags":"-aaaa"},
{"mnem":["BSR ","r"], "code":"8Drr", "clocks":"7", "bus":"", "flags":"-----"},
{"mnem":["LDX #","w"], "code":"8Ewmwl", "clocks":"3", "bus":"", "flags":"-aa0-"},
{"mnem":["SUBA <","p"], "code":"90pp", "clocks":"4", "bus":"", "flags":"uaaaa", "dp":true},
{"mnem":["CMPA <","p"], "code":"91pp", "clocks":"4", "bus":"", "flags":"uaaaa", "dp":true},
{"mnem":["SBCA <","p"], "code":"92pp", "clocks":"4", "bus":"", "flags":"uaaaa", "dp":true},
{"mnem":["SUBD <","p"], "code":"93pp", "clocks":"6", "bus":"", "flags":"-aaaa", "dp":true},
{"mnem":["ANDA <","p"], "code":"94pp", "clocks":"4", "bus":"", "flags":"-aa0-", "dp":true},
{"mnem":["BITA <","p"], "code":"95pp", "clocks":"4", "bus":"", "flags":"-aa0-", "dp":true},
{"mnem":["LDA <","p"], "code":"96pp", "clocks":"4", "bus":"", "flags":"-aa0-", "dp":true},
{"mnem":["STA <","p"], "code":"97pp", "clocks":"4", "bus":"", "flags":"-aa0-", "dp":true},
{"mnem":["EORA <","p"], "code":"98pp", "clocks":"4", "bus":"", "flags":"-aa0-", "dp":true},
{"mnem":["ADCA <","p"], "code":"99pp", "clocks":"4", "bus":"", "flags":"aaaaa", "dp":true},
{"mnem":["ORA <","p"], "code":"9App", "clocks":"4", "bus":"", "flags":"-aa0-", "dp":true},
{"mnem":["ADDA <","p"], "code":"9Bpp", "clocks":"4", "bus":"", "flags":"aaaaa", "dp":true},
{"mnem":["CMPX <","p"], "code":"9Cpp", "clocks":"6", "bus":"", "flags":"-aaaa", "dp":true},
{"mnem":["JSR <","p"], "code":"9Dpp", "clocks":"7", "bus":"", "flags":"-----", "dp":true},
{"mnem":["LDX <","p"], "code":"9Epp", "clocks":"5", "bus":"", "flags":"-aa0-", "dp":true},
{"mnem":["STX <","p"], "code":"9Fpp", "clocks":"5", "bus":"", "flags":"-aa0-", "dp":true},
{"mnem":["SUBA ","y"], "code":"A0yy", "clocks":"4", "bus":"", "flags":"uaaaa"},
{"mnem":["CMPA ","y"], "code":"A1yy", "clocks":"4", "bus":"", "flags":"uaaaa"},
{"mnem":["SBCA ","y"], "code":"A2yy", "clocks":"4", "bus":"", "flags":"uaaaa"},
{"mnem":["SUBD ","y"], "code":"A3yy", "clocks":"6", "bus":"", "flags":"-aaaa"},
{"mnem":["ANDA ","y"], "code":"A4yy", "clocks":"4", "bus":"", "flags":"-aa0-"},
{"mnem":["BITA ","y"], "code":"A5yy", "clocks":"4", "bus":"", "flags":"-aa0-"},
{"mnem":["LDA ","y"], "code":"A6yy", "clocks":"4", "bus":"", "flags":"-aa0-"},
{"mnem":["STA ","y"], "code":"A7yy", "clocks":"4", "bus":"", "flags":"-aa0-"},
{"mnem":["EORA ","y"], "code":"A8yy", "clocks":"4", "bus":"", "flags":"-aa0-"},
{"mnem":["ADCA ","y"], "code":"A9yy", "clocks":"4", "bus":"", "flags":"aaaaa"},
{"mnem":["ORA ","y"], "code":"AAyy", "clocks":"4", "bus":"", "flags":"-aa0-"},
{"mnem":["ADDA ","y"], "code":"AByy", "clocks":"4", "bus":"", "flags":"aaaaa"},
{"mnem":["CMPX ","y"], "code":"ACyy", "clocks":"6", "bus":"", "flags":"-aaaa"},
{"mnem":["JSR ","y"], "code":"ADyy", "clocks":"7", "bus":"", "flags":"-----"},
{"mnem":["LDX ","y"], "code":"AEyy", "clocks":"5", "bus":"", "flags":"-aa0-"},
{"mnem":["STX ","y"], "code":"AFyy", "clocks":"5", "bus":"", "flags":"-aa0-"},
{"mnem":["SUBA ","t"], "code":"B0tmtl", "clocks":"5", "bus":"", "flags":"uaaaa"},
{"mnem":["CMPA ","t"], "code":"B1tmtl", "clocks":"5", "bus":"", "flags":"uaaaa"},
{"mnem":["SBCA ","t"], "code":"B2tmtl", "clocks":"5", "bus":"", "flags":"uaaaa"},
{"mnem":["SUBD ","t"], "code":"B3tmtl", "clocks":"7", "bus":"", "flags":"-aaaa"},
{"mnem":["ANDA ","t"], "code":"B4tmtl", "clocks":"5", "bus":"", "flags":"-aa0-"},
{"mnem":["BITA ","t"], "code":"B5tmtl", "clocks":"5", "bus":"", "flags":"-aa0-"},
{"mnem":["LDA ","t"], "code":"B6tmtl", "clocks":"5", "bus":"", "flags":"-aa0-"},
{"mnem":["STA ","t"], "code":"B7tmtl", "clocks":"5", "bus":"", "flags":"-aa0-"},
{"mnem":["EORA ","t"], "code":"B8tmtl", "clocks":"5", "bus":"", "flags":"-aa0-"},
{"mnem":["ADCA ","t"], "code":"B9tmtl", "clocks":"5", "bus":"", "flags":"aaaaa"},
{"mnem":["ORA ","t"], "code":"BAtmtl", "clocks":"5", "bus":"", "flags":"-aa0-"},
{"mnem":["ADDA ","t"], "code":"BBtmtl", "clocks":"5", "bus":"", "flags":"aaaaa"},
{"mnem":["CMPX ","t"], "code":"BCtmtl", "clocks":"7", "bus":"", "flags":"-aaaa"},
{"mnem":["JSR ","t"], "code":"BDtmtl", "clocks":"8", "bus":"", "flags":"-----"},
{"mnem":["LDX ","t"], "code":"BEtmtl", "clocks":"6", "bus":"", "flags":"-aa0-"},
{"mnem":["STX ","t"], "code":"BFtmtl", "clocks":"6", "bus":"", "flags":"-aa0-"},
{"mnem":["SUBB #","b"], "code":"C0bb", "clocks":"2", "bus":"", "flags":"uaaaa"},
{"mnem":["CMPB #","b"], "code":"C1bb", "clocks":"2", "bus":"", "flags":"uaaaa"},
{"mnem":["SBCB #","b"], "code":"C2bb", "clocks":"2", "bus":"", "flags":"uaaaa"},
{"mnem":["ADDD #","w"], "code":"C3wmwl", "clocks":"4", "bus":"", "flags":"-aaaa"},
{"mnem":["ANDB #","b"], "code":"C4bb", "clocks":"2", "bus":"", "flags":"-aa0-"},
{"mnem":["BITB #","b"], "code":"C5bb", "clocks":"2", "bus":"", "flags":"-aa0-"},
{"mnem":["LDB #","b"], "code":"C6bb", "clocks":"2", "bus":"", "flags":"-aa0-"},
{"mnem":["EORB #","b"], "code":"C8bb", "clocks":"2", "bus":"", "flags":"-aa0-"},
{"mnem":["ADCB #","b"], "code":"C9bb", "clocks":"2", "bus":"", "flags":"aaaaa"},
{"mnem":["ORB #","b"], "code":"CAbb", "clocks":"2", "bus":"", "flags":"-aa0-"},
{"mnem":["ADDB #","b"], "code":"CBbb", "clocks":"2", "bus":"", "flags":"aaaaa"},
{"mnem":["LDD #","w"], "code":"CCwmwl", "clocks":"3", "bus":"", "flags":"-aa0-"},
{"mnem":["LDU #","w"], "code":"CEwmwl", "clocks":"3", "bus":"", "flags":"-aa0-"},
{"mnem":["SUBB <","p"], "code":"D0pp", "clocks":"4", "bus":"", "flags":"uaaaa", "dp":true},
{"mnem":["CMPB <","p"], "code":"D1pp", "clocks":"4", "bus":"", "flags":"uaaaa", "dp":true},
{"mnem":["SBCB <","p"], "code":"D2pp", "clocks":"4", "bus":"", "flags":"uaaaa", "dp":true},
{"mnem":["ADDD <","p"], "code":"D3pp", "clocks":"6", "bus":"", "flags":"-aaaa", "dp":true},
{"mnem":["ANDB <","p"], "code":"D4pp", "clocks":"4", "bus":"", "flags":"-aa0-", "dp":true},
{"mnem":["BITB <","p"], "code":"D5pp", "clocks":"4", "bus":"", "flags":"-aa0-", "dp":true},
{"mnem":["LDB <","p"], "code":"D6pp", "clocks":"4", "bus":"", "flags":"-aa0-", "dp":true},
{"mnem":["STB <","p"], "code":"D7pp", "clocks":"4", "bus":"", "flags":"-aa0-", "dp":true},
{"mnem":["EORB <","p"], "code":"D8pp", "clocks":"4", "bus":"", "flags":"-aa0-", "dp":true},
{"mnem":["ADCB <","p"], "code":"D9pp", "clocks":"4", "bus":"", "flags":"aaaaa", "dp":true},
{"mnem":["ORB <","p"], "code":"DApp", "clocks":"4", "bus":"", "flags":"-aa0-", "dp":true},
{"mnem":["ADDB <","p"], "code":"DBpp", "clocks":"4", "bus":"", "flags":"aaaaa", "dp":true},
{"mnem":["LDD <","p"], "code":"DCpp", "clocks":"5", "bus":"", "flags":"-aa0-", "dp":true},
{"mnem":["STD <","p"], "code":"DDpp", "clocks":"5", "bus":"", "flags":"-aa0-", "dp":true},
{"mnem":["LDU <","p"], "code":"DEpp", "clocks":"5", "bus":"", "flags":"-aa0-", "dp":true},
{"mnem":["STU <","p"], "code":"DFpp", "clocks":"5", "bus":"", "flags":"-aa0-", "dp":true},
{"mnem":["SUBB ","y"], "code":"E0yy", "clocks":"4", "bus":"", "flags":"uaaaa"},
{"mnem":["CMPB ","y"], "code":"E1yy", "clocks":"4", "bus":"", "flags":"uaaaa"},
{"mnem":["SBCB ","y"], "code":"E2yy", "clocks":"4", "bus":"", "flags":"uaaaa"},
{"mnem":["ADDD ","y"], "code":"E3yy", "clocks":"6", "bus":"", "flags":"-aaaa"},
{"mnem":["ANDB ","y"], "code":"E4yy", "clocks":"4", "bus":"", "flags":"-aa0-"},
{"mnem":["BITB ","y"], "code":"E5yy", "clocks":"4", "bus":"", "flags":"-aa0-"},
{"mnem":["LDB ","y"], "code":"E6yy", "clocks":"4", "bus":"", "flags":"-aa0-"},
{"mnem":["STB ","y"], "code":"E7yy", "clocks":"4", "bus":"", "flags":"-aa0-"},
{"mnem":["EORB ","y"], "code":"E8yy", "clocks":"4", "bus":"", "flags":"-aa0-"},
{"mnem":["ADCB ","y"], "code":"E9yy", "clocks":"4", "bus":"", "flags":"aaaaa"},
{"mnem":["ORB ","y"], "code":"EAyy", "clocks":"4", "bus":"", "flags":"-aa0-"},
{"mnem":["ADDB ","y"], "code":"EByy", "clocks":"4", "bus":"", "flags":"aaaaa"},
{"mnem":["LDD ","y"], "code":"ECyy", "clocks":"5", "bus":"", "flags":"-aa0-"},
{"mnem":["STD ","y"], "code":"EDyy", "clocks":"5", "bus":"", "flags":"-aa0-"},
{"mnem":["LDU ","y"], "code":"EEyy", "clocks":"5", "bus":"", "flags":"-aa0-"},
{"mnem":["STU ","y"], "code":"EFyy", "clocks":"5", "bus":"", "flags":"-aa0-"},
{"mnem":["SUBB ","t"], "code":"F0tmtl", "clocks":"5", "bus":"", "flags":"uaaaa"},
{"mnem":["CMPB ","t"], "code":"F1tmtl", "clocks":"5", "bus":"", "flags":"uaaaa"},
{"mnem":["SBCB ","t"], "code":"F2tmtl", "clocks":"5", "bus":"", "flags":"uaaaa"},
{"mnem":["ADDD ","t"], "code":"F3tmtl", "clocks":"7", "bus":"", "flags":"-aaaa"},
{"mnem":["ANDB ","t"], "code":"F4tmtl", "clocks":"5", "bus":"", "flags":"-aa0-"},
{"mnem":["BITB ","t"], "code":"F5tmtl", "clocks":"5", "bus":"", "flags":"-aa0-"},
{"mnem":["LDB ","t"], "code":"F6tmtl", "clocks":"5", "bus":"", "flags":"-aa0-"},
{"mnem":["STB ","t"], "code":"F7tmtl", "clocks":"5", "bus":"", "flags":"-aa0-"},
{"mnem":["EORB ","t"], "code":"F8tmtl", "clocks":"5", "bus":"", "flags":"-aa0-"},
{"mnem":["ADCB ","t"], "code":"F9tmtl", "clocks":"5", "bus":"", "flags":"aaaaa"},
{"mnem":["ORB ","t"], "code":"FAtmtl", "clocks":"5", "bus":"", "flags":"-aa0-"},
{"mnem":["ADDB ","t"], "code":"FBtmtl", "clocks":"5", "bus":"", "flags":"aaaaa"},
{"mnem":["LDD ","t"], "code":"FCtmtl", "clocks":"6", "bus":"", "flags":"-aa0-"},
{"mnem":["STD ","t"], "code":"FDtmtl", "clocks":"6", "bus":"", "flags":"-aa0-"},
{"mnem":["LDU ","t"], "code":"FEtmtl", "clocks":"6", "bus":"", "flags":"-aa0-"},
{"mnem":["STU ","t"], "code":"FFtmtl", "clocks":"6", "bus":"", "flags":"-aa0-"},

{"post":["0,X"], "code":"00", "clocks":"1"},
{"post":["1,X"], "code":"01", "clocks":"1"},
{"post":["2,X"], "code":"02", "clocks":"1"},
{"post":["3,X"], "code":"03", "clocks":"1"},
{"post":["4,X"], "code":"04", "clocks":"1"},
{"post":["5,X"], "code":"05", "clocks":"1"},
{"post":["6,X"], "code":"06", "clocks":"1"},
{"post":["7,X"], "code":"07", "clocks":"1"},
{"post":["8,X"], "code":"08", "clocks":"1"},
{"post":["9,X"], "code":"09", "clocks":"1"},
{"post":["10,X"], "code":"0A", "clocks":"1"},
{"post":["11,X"], "code":"0B", "clocks":"1"},
{"post":["12,X"], "code":"0C", "clocks":"1"},
{"post":["13,X"], "code":"0D", "clocks":"1"},
{"post":["14,X"], "code":"0E", "clocks":"1"},
{"post":["15,X"], "code":"0F", "clocks":"1"},
{"post":["-16,X"], "code":"10", "clocks":"1"},
{"post":["-15,X"], "code":"11", "clocks":"1"},
{"post":["-14,X"], "code":"12", "clocks":"1"},
{"post":["-13,X"], "code":"13", "clocks":"1"},
{"post":["-12,X"], "code":"14", "clocks":"1"},
{"post":["-11,X"], "code":"15", "clocks":"1"},
{"post":["-10,X"], "code":"16", "clocks":"1"},
{"post":["-9,X"], "code":"17", "clocks":"1"},
{"post":["-8,X"], "code":"18", "clocks":"1"},
{"post":["-7,X"], "code":"19", "clocks":"1"},
{"post":["-6,X"], "code":"1A", "clocks":"1"},
{"post":["-5,X"], "code":"1B", "clocks":"1"},
{"post":["-4,X"], "code":"1C", "clocks":"1"},
{"post":["-3,X"], "code":"1D", "clocks":"1"},
{"post":["-2,X"], "code":"1E", "clocks":"1"},
{"post":["-1,X"], "code":"1F", "clocks":"1"},
{"post":["0,Y"], "code":"20", "clocks":"1"},
{"post":["1,Y"], "code":"21", "clocks":"1"},
{"post":["2,Y"], "code":"22", "clocks":"1"},
{"post":["3,Y"], "code":"23", "clocks":"1"},
{"post":["4,Y"], "code":"24", "clocks":"1"},
{"post":["5,Y"], "code":"25", "clocks":"1"},
{"post":["6,Y"], "code":"26", "clocks":"1"},
{"post":["7,Y"], "code":"27", "clocks":"1"},
{"post":["8,Y"], "code":"28", "clocks":"1"},
{"post":["9,Y"], "code":"29", "clocks":"1"},
{"post":["10,Y"], "code":"2A", "clocks":"1"},
{"post":["11,Y"], "code":"2B", "clocks":"1"},
{"post":["12,Y"], "code":"2C", "clocks":"1"},
{"post":["13,Y"], "code":"2D", "clocks":"1"},
{"post":["14,Y"], "code":"2E", "clocks":"1"},
{"post":["15,Y"], "code":"2F", "clocks":"1"},
{"post":["-16,Y"], "code":"30", "clocks":"1"},
{"post":["-15,Y"], "code":"31", "clocks":"1"},
{"post":["-14,Y"], "code":"32", "clocks":"1"},
{"post":["-13,Y"], "code":"33", "clocks":"1"},
{"post":["-12,Y"], "code":"34", "clocks":"1"},
{"post":["-11,Y"], "code":"35", "clocks":"1"},
{"post":["-10,Y"], "code":"36", "clocks":"1"},
{"post":["-9,Y"], "code":"37", "clocks":"1"},
{"post":["-8,Y"], "code":"38", "clocks":"1"},
{"post":["-7,Y"], "code":"39", "clocks":"1"},
{"post":["-6,Y"], "code":"3A", "clocks":"1"},
{"post":["-5,Y"], "code":"3B", "clocks":"1"},
{"post":["-4,Y"], "code":"3C", "clocks":"1"},
{"post":["-3,Y"], "code":"3D", "clocks":"1"},
{"post":["-2,Y"], "code":"3E", "clocks":"1"},
{"post":["-1,Y"], "code":"3F", "clocks":"1"},
{"post":["0,U"], "code":"40", "clocks":"1"},
{"post":["1,U"], "code":"41", "clocks":"1"},
{"post":["2,U"], "code":"42", "clocks":"1"},
{"post":["3,U"], "code":"43", "clocks":"1"},
{"post":["4,U"], "code":"44", "clocks":"1"},
{"post":["5,U"], "code":"45", "clocks":"1"},
{"post":["6,U"], "code":"46", "clocks":"1"},
{"post":["7,U"], "code":"47", "clocks":"1"},
{"post":["8,U"], "code":"48", "clocks":"1"},
{"post":["9,U"], "code":"49", "clocks":"1"},
{"post":["10,U"], "code":"4A", "clocks":"1"},
{"post":["11,U"], "code":"4B", "clocks":"1"},
{"post":["12,U"], "code":"4C", "clocks":"1"},
{"post":["13,U"], "code":"4D", "clocks":"1"},
{"post":["14,U"], "code":"4E", "clocks":"1"},
{"post":["15,U"], "code":"4F", "clocks":"1"},
{"post":["-16,U"], "code":"50", "clocks":"1"},
{"post":["-15,U"], "code":"51", "clocks":"1"},
{"post":["-14,U"], "code":"52", "clocks":"1"},
{"post":["-13,U"], "code":"53", "clocks":"1"},
{"post":["-12,U"], "code":"54", "clocks":"1"},
{"post":["-11,U"], "code":"55", "clocks":"1"},
{"post":["-10,U"], "code":"56", "clocks":"1"},
{"post":["-9,U"], "code":"57", "clocks":"1"},
{"post":["-8,U"], "code":"58", "clocks":"1"},
{"post":["-7,U"], "code":"59", "clocks":"1"},
{"post":["-6,U"], "code":"5A", "clocks":"1"},
{"post":["-5,U"], "code":"5B", "clocks":"1"},
{"post":["-4,U"], "code":"5C", "clocks":"1"},
{"post":["-3,U"], "code":"5D", "clocks":"1"},
{"post":["-2,U"], "code":"5E", "clocks":"1"},
{"post":["-1,U"], "code":"5F", "clocks":"1"},
{"post":["0,S"], "code":"60", "clocks":"1"},
{"post":["1,S"], "code":"61", "clocks":"1"},
{"post":["2,S"], "code":"62", "clocks":"1"},
{"post":["3,S"], "code":"63", "clocks":"1"},
{"post":["4,S"], "code":"64", "clocks":"1"},
{"post":["5,S"], "code":"65", "clocks":"1"},
{"post":["6,S"], "code":"66", "clocks":"1"},
{"post":["7,S"], "code":"67", "clocks":"1"},
{"post":["8,S"], "code":"68", "clocks":"1"},
{"post":["9,S"], "code":"69", "clocks":"1"},
{"post":["10,S"], "code":"6A", "clocks":"1"},
{"post":["11,S"], "code":"6B", "clocks":"1"},
{"post":["12,S"], "code":"6C", "clocks":"1"},
{"post":["13,S"], "code":"6D", "clocks":"1"},
{"post":["14,S"], "code":"6E", "clocks":"1"},
{"post":["15,S"], "code":"6F", "clocks":"1"},
{"post":["-16,S"], "code":"70", "clocks":"1"},
{"post":["-15,S"], "code":"71", "clocks":"1"},
{"post":["-14,S"], "code":"72", "clocks":"1"},
{"post":["-13,S"], "code":"73", "clocks":"1"},
{"post":["-12,S"], "code":"74", "clocks":"1"},
{"post":["-11,S"], "code":"75", "clocks":"1"},
{"post":["-10,S"], "code":"76", "clocks":"1"},
{"post":["-9,S"], "code":"77", "clocks":"1"},
{"post":["-8,S"], "code":"78", "clocks":"1"},
{"post":["-7,S"], "code":"79", "clocks":"1"},
{"post":["-6,S"], "code":"7A", "clocks":"1"},
{"post":["-5,S"], "code":"7B", "clocks":"1"},
{"post":["-4,S"], "code":"7C", "clocks":"1"},
{"post":["-3,S"], "code":"7D", "clocks":"1"},
{"post":["-2,S"], "code":"7E", "clocks":"1"},
{"post":["-1,S"], "code":"7F", "clocks":"1"},
{"post":[",X+"], "code":"80", "clocks":"2"},
{"post":[",X++"], "code":"81", "clocks":"3"},
{"post":[",-X"], "code":"82", "clocks":"2"},
{"post":[",--X"], "code":"83", "clocks":"3"},
{"post":[",X"], "code":"84", "clocks":"0"},
{"post":["B,X"], "code":"85", "clocks":"1"},
{"post":["A,X"], "code":"86", "clocks":"1"},
{"post":["","j",",X"], "code":"88jj", "clocks":"1"},
{"post":["","k",",X"], "code":"89kmkl", "clocks":"4"},
{"post":["D,X"], "code":"8B", "clocks":"4"},
{"post":["","j",",PC"], "code":"8Cjj", "clocks":"1"},
{"post":["","k",",PC"], "code":"8Dkmkl", "clocks":"4"},
{"post":["[,X++]"], "code":"91", "clocks":"6"},
{"post":["[,--X]"], "code":"93", "clocks":"6"},
{"post":["[,X]"], "code":"94", "clocks":"3"},
{"post":["[B,X]"], "code":"95", "clocks":"4"},
{"post":["[A,X]"], "code":"96", "clocks":"4"},
{"post":["[","j",",X]"], "code":"98jj", "clocks":"4"},
{"post":["[","k",",X]"], "code":"99kmkl", "clocks":"7"},
{"post":["[D,X]"], "code":"9B", "clocks":"7"},
{"post":["[","j",",PC]"], "code":"9Cjj", "clocks":"4"},
{"post":["[","k",",PC]"], "code":"9Dkmkl", "clocks":"7"},
{"post":["[","t","]"], "code":"9Ftmtl", "clocks":"5"},
{"post":[",Y+"], "code":"A0", "clocks":"2"},
{"post":[",Y++"], "code":"A1", "clocks":"3"},
{"post":[",-Y"], "code":"A2", "clocks":"2"},
{"post":[",--Y"], "code":"A3", "clocks":"3"},
{"post":[",Y"], "code":"A4", "clocks":"0"},
{"post":["B,Y"], "code":"A5", "clocks":"1"},
{"post":["A,Y"], "code":"A6", "clocks":"1"},
{"post":["","j",",Y"], "code":"A8jj", "clocks":"1"},
{"post":["","k",",Y"], "code":"A9kmkl", "clocks":"4"},
{"post":["D,Y"], "code":"AB", "clocks":"4"},
{"post":["","j",",PC"], "code":"ACjj", "clocks":"1"},
{"post":["","k",",PC"], "code":"ADkmkl", "clocks":"4"},
{"post":["[,Y++]"], "code":"B1", "clocks":"6"},
{"post":["[,--Y]"], "code":"B3", "clocks":"6"},
{"post":["[,Y]"], "code":"B4", "clocks":"3"},
{"post":["[B,Y]"], "code":"B5", "clocks":"4"},
{"post":["[A,Y]"], "code":"B6", "clocks":"4"},
{"post":["[","j",",Y]"], "code":"B8jj", "clocks":"4"},
{"post":["[","k",",Y]"], "code":"B9kmkl", "clocks":"7"},
{"post":["[D,Y]"], "code":"BB", "clocks":"7"},
{"post":["[","j",",PC]"], "code":"BCjj", "clocks":"4"},
{"post":["[","k",",PC]"], "code":"BDkmkl", "clocks":"7"},
{"post":["[","t","]"], "code":"BFtmtl", "clocks":"5"},
{"post":[",U+"], "code":"C0", "clocks":"2"},
{"post":[",U++"], "code":"C1", "clocks":"3"},
{"post":[",-U"], "code":"C2", "clocks":"2"},
{"post":[",--U"], "code":"C3", "clocks":"3"},
{"post":[",U"], "code":"C4", "clocks":"0"},
{"post":["B,U"], "code":"C5", "clocks":"1"},
{"post":["A,U"], "code":"C6", "clocks":"1"},
{"post":["","j",",U"], "code":"C8jj", "clocks":"1"},
{"post":["","k",",U"], "code":"C9kmkl", "clocks":"4"},
{"post":["D,U"], "code":"CB", "clocks":"4"},
{"post":["","j",",PC"], "code":"CCjj", "clocks":"1"},
{"post":["","k",",PC"], "code":"CDkmkl", "clocks":"4"},
{"post":["[,U++]"], "code":"D1", "clocks":"6"},
{"post":["[,--U]"], "code":"D3", "clocks":"6"},
{"post":["[,U]"], "code":"D4", "clocks":"3"},
{"post":["[B,U]"], "code":"D5", "clocks":"4"},
{"post":["[A,U]"], "code":"D6", "clocks":"4"},
{"post":["[","j",",U]"], "code":"D8jj", "clocks":"4"},
{"post":["[","k",",U]"], "code":"D9kmkl", "clocks":"7"},
{"post":["[D,U]"], "code":"DB", "clocks":"7"},
{"post":["[","j",",PC]"], "code":"DCjj", "clocks":"4"},
{"post":["[","k",",PC]"], "code":"DDkmkl", "clocks":"7"},
{"post":["[","t","]"], "code":"DFtmtl", "clocks":"5"},
{"post":[",S+"], "code":"E0", "clocks":"2"},
{"post":[",S++"], "code":"E1", "clocks":"3"},
{"post":[",-S"], "code":"E2", "clocks":"2"},
{"post":[",--S"], "code":"E3", "clocks":"3"},
{"post":[",S"], "code":"E4", "clocks":"0"},
{"post":["B,S"], "code":"E5", "clocks":"1"},
{"post":["A,S"], "code":"E6", "clocks":"1"},
{"post":["","j",",S"], "code":"E8jj", "clocks":"1"},
{"post":["","k",",S"], "code":"E9kmkl", "clocks":"4"},
{"post":["D,S"], "code":"EB", "clocks":"4"},
{"post":["","j",",PC"], "code":"ECjj", "clocks":"1"},
{"post":["","k",",PC"], "code":"EDkmkl", "clocks":"4"},
{"post":["[,S++]"], "code":"F1", "clocks":"6"},
{"post":["[,--S]"], "code":"F3", "clocks":"6"},
{"post":["[,S]"], "code":"F4", "clocks":"3"},
{"post":["[B,S]"], "code":"F5", "clocks":"4"},
{"post":["[A,S]"], "code":"F6", "clocks":"4"},
{"post":["[","j",",S]"], "code":"F8jj", "clocks":"4"},
{"post":["[","k",",S]"], "code":"F9kmkl", "clocks":"7"},
{"post":["[D,S]"], "code":"FB", "clocks":"7"},
{"post":["[","j",",PC]"], "code":"FCjj", "clocks":"4"},
{"post":["[","k",",PC]"], "code":"FDkmkl", "clocks":"7"},
{"post":["[","t","]"], "code":"FFtmtl", "clocks":"5"}
]
