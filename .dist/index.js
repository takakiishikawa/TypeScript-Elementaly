import { createInterface } from "readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("お昼ご飯:", (line) => {
    //文字列が入力されるとここが実行される
    console.log(`${line}が入力されました`);
    rl.close();
});
