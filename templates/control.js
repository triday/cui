const lower=(p)=>p.toLowerCase();
const title=(p)=>p.slice(0,1).toUpperCase()+p.slice(1).toLowerCase();

module.exports = function (control) {
    return [
        {
            name: `src/controls/${lower(control)}.ts`,
            content: `export interface I${title(control)}{

}
export interface I${title(control)}States{

}
export interface I${title(control)}Props{

}`
        },
        {
            name: `src/index.ts`,
            type: 'append',
            content: `export * from "./controls/${lower(control)}";\n`
        }
    ]
}