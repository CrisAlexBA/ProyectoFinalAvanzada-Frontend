export class DetallesCitaDTO {
    
        codigoPaciente:number =0;
        especialidad:string="";
        codigoMedico:number= 0;
        fecha:string = "";
        hora:Date | null=  null;
        motivoConsulta:string="";
        estadoCita:String ="";

        constructor(codigoPaciente:number){
                this.codigoPaciente = codigoPaciente;
        }
}
