import{s}from"./index-CmSqSVn9.js";function t(a){let e=a;return e=e.replace(/```[\s\S]*?```/g," "),e=e.replace(/~~~[\s\S]*?~~~/g," "),e=e.replace(/!\[[^\]]*]\([^)]*\)/g," "),e=e.replace(/\[([^\]]+)]\([^)]*\)/g,"$1"),e=e.split(`
`).map(p=>{let r=p.replace(/^\s{0,3}>+\s?/,"");return r=r.replace(/^\s*[-*+]\s+/,""),r=r.replace(/^\s{0,3}#{1,6}\s+/,""),/^\s*([-*_])\1{2,}\s*$/.test(r)?"":r}).join(`
`),e=e.replace(/(\*\*|__)(.*?)\1/g,"$2"),e=e.replace(/(\*|_)(.*?)\1/g,"$2"),e=e.replace(/~~(.*?)~~/g,"$1"),e=e.replace(/`+([^`]+)`+/g,"$1"),e=e.replace(/<[^>]+>/g,""),s(e).text}export{t as parseMarkdown};
