let text = "Lex luter has a big suit"

console.log(
    text.toUpperCase().slice(text.toUpperCase().search("A"),text.toUpperCase().search("A")+1)+
    text.slice(text.search("l"),text.search("l")+1)+
    text.slice(text.search("e"),text.search("e")+1)+
    text.slice(text.search("x"),text.search("x")+1)
)