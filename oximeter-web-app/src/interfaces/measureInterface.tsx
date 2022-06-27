export interface Measure {
    bpm: number,
    spo2: number,
    date: Date
};

export interface ChartJsItem {
    name: String,
    bpm: number,
    spo2: number
}

export interface ChartJsBpmItem {
    name: String,
    bpm: number
}
export interface ChartJsSpo2Item {
    name: String,
    spo2: number
}