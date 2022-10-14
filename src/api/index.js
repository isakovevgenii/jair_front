
const data = [
    {
        "id":1,
        "airline": "https://sun9-78.userapi.com/impg/aDNmZ0Fai7p_q1tACwRBdhD4u-dajdIUv5TTFQ/8t_2ATxlg6A.jpg?size=375x77&quality=95&sign=142a09d1cc3f7a3d3e97aab3ee530e73&type=album",
        "airplane": "https://sun9-5.userapi.com/impg/QYSQPM_lqA12zI9qQ2fUn694DfuWxHgTU-DBng/EZit6WBc-mI.jpg?size=209x185&quality=95&sign=03cda0e31f5c57833263ddc837fc54b9&type=album",
        "pilot": "https://sun9-23.userapi.com/impg/rBTIdS9NX7ANRNcjV4OUcu5s3oVPzpA62CHloA/90s2VCkgz54.jpg?size=94x126&quality=95&sign=cbe1feec83faa5827d1af3b02f2ebb21&type=album",
        "copilot":"https://sun9-30.userapi.com/impg/nah_i0edrwmiEh8GBoDHmAHQ61L-6nPEHn4clw/MTDFJzFPJOM.jpg?size=105x112&quality=95&sign=5e16cf26708365ef69cd9c4c9bee2699&type=album",
    },
    {
        "id":2,
        "airline": "https://sun9-78.userapi.com/impg/aDNmZ0Fai7p_q1tACwRBdhD4u-dajdIUv5TTFQ/8t_2ATxlg6A.jpg?size=375x77&quality=95&sign=142a09d1cc3f7a3d3e97aab3ee530e73&type=album",
        "airplane": "https://sun9-5.userapi.com/impg/QYSQPM_lqA12zI9qQ2fUn694DfuWxHgTU-DBng/EZit6WBc-mI.jpg?size=209x185&quality=95&sign=03cda0e31f5c57833263ddc837fc54b9&type=album",
        "pilot": "https://sun9-23.userapi.com/impg/rBTIdS9NX7ANRNcjV4OUcu5s3oVPzpA62CHloA/90s2VCkgz54.jpg?size=94x126&quality=95&sign=cbe1feec83faa5827d1af3b02f2ebb21&type=album",
        "copilot":"https://sun9-30.userapi.com/impg/nah_i0edrwmiEh8GBoDHmAHQ61L-6nPEHn4clw/MTDFJzFPJOM.jpg?size=105x112&quality=95&sign=5e16cf26708365ef69cd9c4c9bee2699&type=album",
    },
    {
        "id":2,
        "airline": "https://sun9-78.userapi.com/impg/aDNmZ0Fai7p_q1tACwRBdhD4u-dajdIUv5TTFQ/8t_2ATxlg6A.jpg?size=375x77&quality=95&sign=142a09d1cc3f7a3d3e97aab3ee530e73&type=album",
        "airplane": "https://sun9-5.userapi.com/impg/QYSQPM_lqA12zI9qQ2fUn694DfuWxHgTU-DBng/EZit6WBc-mI.jpg?size=209x185&quality=95&sign=03cda0e31f5c57833263ddc837fc54b9&type=album",
        "pilot": "https://sun9-23.userapi.com/impg/rBTIdS9NX7ANRNcjV4OUcu5s3oVPzpA62CHloA/90s2VCkgz54.jpg?size=94x126&quality=95&sign=cbe1feec83faa5827d1af3b02f2ebb21&type=album",
        "copilot":"https://sun9-30.userapi.com/impg/nah_i0edrwmiEh8GBoDHmAHQ61L-6nPEHn4clw/MTDFJzFPJOM.jpg?size=105x112&quality=95&sign=5e16cf26708365ef69cd9c4c9bee2699&type=album",
    },
    {
        "id":2,
        "airline": "https://sun9-78.userapi.com/impg/aDNmZ0Fai7p_q1tACwRBdhD4u-dajdIUv5TTFQ/8t_2ATxlg6A.jpg?size=375x77&quality=95&sign=142a09d1cc3f7a3d3e97aab3ee530e73&type=album",
        "airplane": "https://sun9-5.userapi.com/impg/QYSQPM_lqA12zI9qQ2fUn694DfuWxHgTU-DBng/EZit6WBc-mI.jpg?size=209x185&quality=95&sign=03cda0e31f5c57833263ddc837fc54b9&type=album",
        "pilot": "https://sun9-23.userapi.com/impg/rBTIdS9NX7ANRNcjV4OUcu5s3oVPzpA62CHloA/90s2VCkgz54.jpg?size=94x126&quality=95&sign=cbe1feec83faa5827d1af3b02f2ebb21&type=album",
        "copilot":"https://sun9-30.userapi.com/impg/nah_i0edrwmiEh8GBoDHmAHQ61L-6nPEHn4clw/MTDFJzFPJOM.jpg?size=105x112&quality=95&sign=5e16cf26708365ef69cd9c4c9bee2699&type=album",
    },
];

function setAirplane(formElem) {
    fetch('url', {
        method: "POST",
        body: JSON.stringify(serializeForm(formElem))
    });
}

function serializeForm(formNode) {
    const { elements } = formNode;
    let data = {};
    Array.from(elements)
        .forEach((element) => {
            if (element.type === "select-one") {
                const { name, value } = element
                data[name] = value;
            }
        })
    return data;
}

export function getFlights() {
    return data;
}
