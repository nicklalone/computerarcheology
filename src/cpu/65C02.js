[
{"mnem":"BRK", "code":"00", "clocks":"7", "bus":"", "flags":"-------"},
{"mnem":"ORA (p,X)", "code":"01pp", "clocks":"6", "bus":"r", "flags":"-------"},
{"mnem":"TSB d", "code":"04", "clocks":"", "bus":"", "flags":"-------"},
{"mnem":"ORA <p", "code":"05pp", "clocks":"3", "bus":"r", "flags":"-------"},
{"mnem":"ASL <p", "code":"06pp", "clocks":"5", "bus":"r", "flags":"-------"},
{"mnem":"PHP", "code":"08", "clocks":"3", "bus":"w", "flags":"-------"},
{"mnem":"ORA #b", "code":"09bb", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"ASL A", "code":"0A", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"TSB a", "code":"0C", "clocks":"", "bus":"", "flags":"-------"},
{"mnem":"ORA t", "code":"0Dtltm", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"ASL t", "code":"0Etltm", "clocks":"6", "bus":"r", "flags":"-------"},
{"mnem":"BPL r", "code":"10rr", "clocks":"2/3/4", "bus":"", "flags":"-------"},
{"mnem":"ORA (p),Y", "code":"11pp", "clocks":"5", "bus":"r", "flags":"-------"},
{"mnem":"ORA (d)", "code":"12", "clocks":"", "bus":"", "flags":"-------"},
{"mnem":"TRB d", "code":"14", "clocks":"", "bus":"", "flags":"-------"},
{"mnem":"ORA p,X", "code":"15pp", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"ASL p,X", "code":"16pp", "clocks":"6", "bus":"r", "flags":"-------"},
{"mnem":"CLC", "code":"18", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"ORA t,Y", "code":"19tltm", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"INC A", "code":"1A", "clocks":"", "bus":"", "flags":"-------"},
{"mnem":"TRB a", "code":"1C", "clocks":"", "bus":"", "flags":"-------"},
{"mnem":"ORA t,X", "code":"1Dtltm", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"ASL t,X", "code":"1Etltm", "clocks":"7", "bus":"r", "flags":"-------"},
{"mnem":"JSR t", "code":"20tltm", "clocks":"6", "bus":"", "flags":"-------"},
{"mnem":"AND (p,X)", "code":"21pp", "clocks":"6", "bus":"r", "flags":"-------"},
{"mnem":"BIT <p", "code":"24pp", "clocks":"3", "bus":"r", "flags":"-------"},
{"mnem":"AND <p", "code":"25pp", "clocks":"3", "bus":"r", "flags":"-------"},
{"mnem":"ROL <p", "code":"26pp", "clocks":"5", "bus":"rw", "flags":"-------"},
{"mnem":"PLP", "code":"28", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"AND #b", "code":"29bb", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"ROL A", "code":"2A", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"BIT t", "code":"2Ctltm", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"AND t", "code":"2Dtltm", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"ROL t", "code":"2Etltm", "clocks":"6", "bus":"r", "flags":"-------"},
{"mnem":"BMI r", "code":"30rr", "clocks":"2/3/4", "bus":"", "flags":"-------"},
{"mnem":"AND (p),Y", "code":"31pp", "clocks":"5", "bus":"r", "flags":"-------"},
{"mnem":"AND (d)", "code":"32", "clocks":"", "bus":"", "flags":"-------"},
{"mnem":"BIT d,X", "code":"34", "clocks":"", "bus":"", "flags":"-------"},
{"mnem":"AND p,X", "code":"35pp", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"ROL p,X", "code":"36pp", "clocks":"6", "bus":"r", "flags":"-------"},
{"mnem":"SEC", "code":"38", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"AND t,Y", "code":"39tltm", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"DEC A", "code":"3A", "clocks":"", "bus":"", "flags":"-------"},
{"mnem":"BIT a,X", "code":"3C", "clocks":"", "bus":"", "flags":"-------"},
{"mnem":"AND t,X", "code":"3Dtltm", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"ROL t,X", "code":"3Etltm", "clocks":"7", "bus":"rw", "flags":"-------"},
{"mnem":"RTI", "code":"40", "clocks":"6", "bus":"", "flags":"-------"},
{"mnem":"EOR (p,X)", "code":"41pp", "clocks":"6", "bus":"r", "flags":"-------"},
{"mnem":"EOR <p", "code":"45pp", "clocks":"3", "bus":"r", "flags":"-------"},
{"mnem":"LSR <p", "code":"46pp", "clocks":"5", "bus":"rw", "flags":"-------"},
{"mnem":"PHA", "code":"48", "clocks":"3", "bus":"w", "flags":"-------"},
{"mnem":"EOR #b", "code":"49bb", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"LSR A", "code":"4A", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"JMP t", "code":"4Ctltm", "clocks":"3", "bus":"", "flags":"-------"},
{"mnem":"EOR t", "code":"4Dtltm", "clocks":"4", "bus":"", "flags":"-------"},
{"mnem":"LSR t", "code":"4Etltm", "clocks":"6", "bus":"", "flags":"-------"},
{"mnem":"BVC r", "code":"50rr", "clocks":"2/3/4", "bus":"", "flags":"-------"},
{"mnem":"EOR (p),Y", "code":"51pp", "clocks":"5", "bus":"r", "flags":"-------"},
{"mnem":"EOR (d)", "code":"52", "clocks":"", "bus":"", "flags":"-------"},
{"mnem":"EOR p,X", "code":"55pp", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"LSR p,X", "code":"56pp", "clocks":"6", "bus":"rw", "flags":"-------"},
{"mnem":"CLI", "code":"58", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"EOR t,Y", "code":"59tltm", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"PHY", "code":"5A", "clocks":"", "bus":"", "flags":"-------"},
{"mnem":"EOR t,X", "code":"5Dtltm", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"LSR t,X", "code":"5Etltm", "clocks":"7", "bus":"rw", "flags":"-------"},
{"mnem":"RTS", "code":"60", "clocks":"6", "bus":"", "flags":"-------"},
{"mnem":"ADC (p,X)", "code":"61pp", "clocks":"6", "bus":"r", "flags":"-------"},
{"mnem":"STZ d", "code":"64", "clocks":"", "bus":"", "flags":"-------"},
{"mnem":"ADC <p", "code":"65pp", "clocks":"3", "bus":"r", "flags":"-------"},
{"mnem":"ROR <p", "code":"66pp", "clocks":"5", "bus":"rw", "flags":"-------"},
{"mnem":"PLA", "code":"68", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"ADC #b", "code":"69bb", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"ROR A", "code":"6A", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"JMP (m)", "code":"6Cmlmm", "clocks":"5", "bus":"", "flags":"-------"},
{"mnem":"ADC t", "code":"6Dtltm", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"ROR t", "code":"6Etltm", "clocks":"6", "bus":"r", "flags":"-------"},
{"mnem":"BVS r", "code":"70rr", "clocks":"2/3/4", "bus":"", "flags":"-------"},
{"mnem":"ADC (p),Y", "code":"71pp", "clocks":"5", "bus":"r", "flags":"-------"},
{"mnem":"ADC (d)", "code":"72", "clocks":"", "bus":"", "flags":"-------"},
{"mnem":"STZ d,X", "code":"74", "clocks":"", "bus":"", "flags":"-------"},
{"mnem":"ADC <p,X", "code":"75pp", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"ROR <p,X", "code":"76pp", "clocks":"6", "bus":"r", "flags":"-------"},
{"mnem":"SEI", "code":"78", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"ADC t,Y", "code":"79tltm", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"PLY", "code":"7A", "clocks":"", "bus":"", "flags":"-------"},
{"mnem":"JMP (a,X)", "code":"7C", "clocks":"", "bus":"", "flags":"-------"},
{"mnem":"ADC t,X", "code":"7Dtltm", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"ROR t,X", "code":"7Etltm", "clocks":"7", "bus":"r", "flags":"-------"},
{"mnem":"BRA r", "code":"80", "clocks":"", "bus":"", "flags":"-------"},
{"mnem":"STA (p,X)", "code":"81pp", "clocks":"6", "bus":"w", "flags":"-------"},
{"mnem":"STY <p", "code":"84pp", "clocks":"3", "bus":"w", "flags":"-------"},
{"mnem":"STA <p", "code":"85pp", "clocks":"3", "bus":"w", "flags":"-------"},
{"mnem":"STX <p", "code":"86pp", "clocks":"3", "bus":"w", "flags":"-------"},
{"mnem":"DEY", "code":"88", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"BIT #", "code":"89", "clocks":"", "bus":"", "flags":"-------"},
{"mnem":"TXA", "code":"8A", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"STY t", "code":"8Ctltm", "clocks":"4", "bus":"w", "flags":"-------"},
{"mnem":"STA t", "code":"8Dtltm", "clocks":"4", "bus":"w", "flags":"-------"},
{"mnem":"STX t", "code":"8Etltm", "clocks":"4", "bus":"w", "flags":"-------"},
{"mnem":"BCC r", "code":"90rr", "clocks":"2/3/4", "bus":"", "flags":"-------"},
{"mnem":"STA (p),Y", "code":"91pp", "clocks":"6", "bus":"w", "flags":"-------"},
{"mnem":"STA (d)", "code":"92", "clocks":"", "bus":"", "flags":"-------"},
{"mnem":"STY p,X", "code":"94pp", "clocks":"4", "bus":"w", "flags":"-------"},
{"mnem":"STA p,X", "code":"95pp", "clocks":"4", "bus":"w", "flags":"-------"},
{"mnem":"STX p,Y", "code":"96pp", "clocks":"4", "bus":"w", "flags":"-------"},
{"mnem":"TYA", "code":"98", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"STA t,Y", "code":"99tltm", "clocks":"5", "bus":"w", "flags":"-------"},
{"mnem":"TXS", "code":"9A", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"STZ a", "code":"9C", "clocks":"", "bus":"", "flags":"-------"},
{"mnem":"STA t,X", "code":"9Dtltm", "clocks":"5", "bus":"w", "flags":"-------"},
{"mnem":"STZ a,X", "code":"9E", "clocks":"", "bus":"", "flags":"-------"},
{"mnem":"LDY #b", "code":"A0bb", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"LDA (p,X)", "code":"A1pp", "clocks":"6", "bus":"r", "flags":"-------"},
{"mnem":"LDX #b", "code":"A2bb", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"LDY <p", "code":"A4pp", "clocks":"3", "bus":"r", "flags":"-------"},
{"mnem":"LDA <p", "code":"A5pp", "clocks":"3", "bus":"r", "flags":"-------"},
{"mnem":"LDX <p", "code":"A6pp", "clocks":"3", "bus":"r", "flags":"-------"},
{"mnem":"TAY", "code":"A8", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"LDA #b", "code":"A9bb", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"TAX", "code":"AA", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"LDY t", "code":"ACtltm", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"LDA t", "code":"ADtltm", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"LDX t", "code":"AEtltm", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"BCS r", "code":"B0rr", "clocks":"2/3/4", "bus":"", "flags":"-------"},
{"mnem":"LDA (p),Y", "code":"B1pp", "clocks":"5", "bus":"r", "flags":"-------"},
{"mnem":"LDA (d)", "code":"B2", "clocks":"", "bus":"", "flags":"-------"},
{"mnem":"LDY p,X", "code":"B4pp", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"LDA p,X", "code":"B5pp", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"LDX p,Y", "code":"B6pp", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"CLV", "code":"B8", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"LDA t,Y", "code":"B9tltm", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"TSX", "code":"BA", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"LDY t,X", "code":"BCtltm", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"LDA t,X", "code":"BDtltm", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"LDX t,Y", "code":"BEtltm", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"CPY #b", "code":"C0bb", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"CMP (p,X)", "code":"C1pp", "clocks":"6", "bus":"r", "flags":"-------"},
{"mnem":"CPY <p", "code":"C4pp", "clocks":"3", "bus":"r", "flags":"-------"},
{"mnem":"CMP <p", "code":"C5pp", "clocks":"3", "bus":"r", "flags":"-------"},
{"mnem":"DEC <p", "code":"C6pp", "clocks":"5", "bus":"rw", "flags":"-------"},
{"mnem":"INY", "code":"C8", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"CMP #b", "code":"C9bb", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"DEX", "code":"CA", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"CPY t", "code":"CCtltm", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"CMP t", "code":"CDtltm", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"DEC t", "code":"CEtltm", "clocks":"6", "bus":"rw", "flags":"-------"},
{"mnem":"BNE r", "code":"D0rr", "clocks":"2/3/4", "bus":"", "flags":"-------"},
{"mnem":"CMP (p),Y", "code":"D1pp", "clocks":"5", "bus":"r", "flags":"-------"},
{"mnem":"CMP (d)", "code":"D2", "clocks":"", "bus":"", "flags":"-------"},
{"mnem":"CMP p,X", "code":"D5pp", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"DEC p,X", "code":"D6pp", "clocks":"6", "bus":"rw", "flags":"-------"},
{"mnem":"CLD", "code":"D8", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"CMP t,Y", "code":"D9tltm", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"PHX", "code":"DA", "clocks":"", "bus":"", "flags":"-------"},
{"mnem":"CMP t,X", "code":"DDtltm", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"DEC t,X", "code":"DEtltm", "clocks":"7", "bus":"rw", "flags":"-------"},
{"mnem":"CPX #b", "code":"E0bb", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"SBC (p,X)", "code":"E1pp", "clocks":"", "bus":"r", "flags":"-------"},
{"mnem":"CPX <p", "code":"E4pp", "clocks":"3", "bus":"r", "flags":"-------"},
{"mnem":"SBC <p", "code":"E5pp", "clocks":"", "bus":"r", "flags":"-------"},
{"mnem":"INC <p", "code":"E6pp", "clocks":"5", "bus":"rw", "flags":"-------"},
{"mnem":"INX", "code":"E8", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"SBC #b", "code":"E9bb", "clocks":"", "bus":"", "flags":"-------"},
{"mnem":"NOP", "code":"EA", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"CPX t", "code":"ECtltm", "clocks":"4", "bus":"r", "flags":"-------"},
{"mnem":"SBC t", "code":"EDtltm", "clocks":"", "bus":"r", "flags":"-------"},
{"mnem":"INC t", "code":"EEtltm", "clocks":"6", "bus":"rw", "flags":"-------"},
{"mnem":"BEQ r", "code":"F0rr", "clocks":"2/3/4", "bus":"", "flags":"-------"},
{"mnem":"SBC (p),Y", "code":"F1pp", "clocks":"", "bus":"r", "flags":"-------"},
{"mnem":"SBC (d)", "code":"F2", "clocks":"", "bus":"", "flags":"-------"},
{"mnem":"SBC p,X", "code":"F5pp", "clocks":"", "bus":"r", "flags":"-------"},
{"mnem":"INC p,X", "code":"F6pp", "clocks":"6", "bus":"rw", "flags":"-------"},
{"mnem":"SED", "code":"F8", "clocks":"2", "bus":"", "flags":"-------"},
{"mnem":"SBC t,Y", "code":"F9tltm", "clocks":"", "bus":"r", "flags":"-------"},
{"mnem":"PLX", "code":"FA", "clocks":"", "bus":"", "flags":"-------"},
{"mnem":"SBC t,X", "code":"FDtltm", "clocks":"", "bus":"r", "flags":"-------"},
{"mnem":"INC t,X", "code":"FEtltm", "clocks":"7", "bus":"rw", "flags":"-------"}
]