export class UsuarioModel {
    constructor(
        public nombre: string,
        public apellido: string,
        public email: string,
        public povincia: string,
        public opcion: string,
        public subscribir: boolean
    ) {}
}
