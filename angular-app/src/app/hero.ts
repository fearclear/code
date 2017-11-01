export class Hero {
    constructor(public userName: string, public id: number) {
        enum Color { Red, Yellow, Blue }
        interface labelValue {
            label: string
        }
        interface Config {
            color?: string,
            width?: number,
        }

        function changeNum(config: Config) {
            const newConfig = {
                color: 'red',
                width: 100,
            }
            if (config.color) {
                newConfig.color = config.color;
            }
            if (config.width) {
                newConfig.width = config.width;
            }
            return newConfig
        }
        const num = {
            color: 'yellow'
        }

        type SearchFunc = (source: string, substr: string) => boolean
        let foo: SearchFunc
        foo = function (src, sub) {
            const result = src.search(sub)
            return result > -1
        }
        interface Person {
            name: string,
            age?: number,
        }
        const person: Person = {
            name: 'Mike',
            age: 13,
        }

        interface StringArray {
            [index: number]: object,
        }
        const myArr: StringArray = [{}, '123']

        interface NumberDictionary {
            readonly [index: string]: number | string,
            length: number,
            name: string,
        }

        interface ClockInterface {
            currentTime: Date;
        }
        class Clock implements ClockInterface {
            currentTime: Date;
            constructor(h: number, m: number) {

            }
        }

        class Greeter {
            greeting: string;
            constructor(message: string) {
                this.greeting = message;
            }
            greet() {
                return `Hello, ${this.greeting}`
            }
        }

        const greet = new Greeter('abc')
        console.log(greet.greet());

    }
}
