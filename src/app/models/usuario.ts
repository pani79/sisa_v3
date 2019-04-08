export class Usuario {
    constructor(
        public usuario: string = null,
        public password: string = null,
        public n_documento: number = null,
        public email: string = null,
        public funcion: string = null
        /*
        id: number;
        nombre: string;
        apellido: string;
        foto: string;
        permisos: boolean[];
        */
    ) {}
}
