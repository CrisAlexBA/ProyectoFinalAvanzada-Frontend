export class DetallesConsultaDTO {
        codigo:number=0;
        nomPaciente:string ="";
        fechaCreacion:Date|null =null;
        fechaCita:Date | null =null;
        horaCita:Date|null =null;
        estadoCita:string ="";
        motivoConsulta:string ="";
        nomMedico:string ="";
        especialidad:string ="";
        notasMedicas:string ="";
        diagnostico:string ="";
        tratamiento:string ="";
}
