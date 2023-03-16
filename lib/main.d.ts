interface IFrontuRegistryStore {
    [key: string]: FrontuComponent;
}
declare class FrontuRegistry {
    store: IFrontuRegistryStore;
    willMount: {};
    define(name: string, component: FrontuComponent): void;
}
export declare class Frontu {
    static store: {};
    static COMPONENT_TYPE: number;
    static Registry: FrontuRegistry;
}
export declare class FrontuComponent {
    container: any;
    store: any;
    props: {
        container: any;
        store: any;
    };
    state: {};
    html: string;
    eventBindingStore: {};
    validElementTree: {};
    constructor(props: {
        container: any;
        store: any;
    });
    update(props: {
        container: any;
        store: any;
    }): void;
    didMount(): void;
    willMount(): void;
    setState(handler: (arg0: any) => any): void | {};
    onUpdate(): void;
    render(): any;
    eventBinding(selector: string, type: string, callback: any): void;
    cleanEventBinding(selector: string, type: string): void;
}
export {};
