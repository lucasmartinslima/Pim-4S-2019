package br.unip.ads.pim.domain;

public class Viagem {


    private long id;

    private String statusViagem;
    private int cep;

    private int diaInicio;
    private int mesInicio;
    private int anoInicio;

    private int diaFim;
    private int mesFim;
    private int anoFim;

    private int idVeiculo;
    private int idMotorista;

    private String texto;

    @Override public String toString(){

    final String status = this.getStatusViagem();

        if(status.equals("1")) {
            texto = "CEP: "+this.getCep()+"\nFinalizada\nFim: "+this.getDiaFim()+"/"+this.getMesFim()+"/"+this.getAnoFim();
        }else{
            texto = "CEP: "+this.getCep()+"\nNão Finalizada\nFim: "+this.getDiaFim()+"/"+this.getMesFim()+"/"+this.getAnoFim();
        }


        return texto;
    }

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getStatusViagem() {
        return statusViagem;
    }
    public void setStatusViagem(String statusViagem) {
        this.statusViagem = statusViagem;
    }
    public int getCep() {
        return cep;
    }
    public void setCep(int cep) {
        this.cep = cep;
    }
    public int getDiaInicio() {
        return diaInicio;
    }
    public void setDiaInicio(int diaInicio) {
        this.diaInicio = diaInicio;
    }
    public int getMesInicio() {
        return mesInicio;
    }
    public void setMesInicio(int mesInicio) {
        this.mesInicio = mesInicio;
    }
    public int getAnoInicio() {
        return anoInicio;
    }
    public void setAnoInicio(int anoInicio) {
        this.anoInicio = anoInicio;
    }
    public int getDiaFim() {
        return diaFim;
    }
    public void setDiaFim(int diaFim) {
        this.diaFim = diaFim;
    }
    public int getMesFim() {
        return mesFim;
    }
    public void setMesFim(int mesFim) {
        this.mesFim = mesFim;
    }
    public int getAnoFim() {
        return anoFim;
    }
    public void setAnoFim(int anoFim) {
        this.anoFim = anoFim;
    }
    public int getIdVeiculo() {
        return idVeiculo;
    }
    public void setIdVeiculo(int idVeiculo) {
        this.idVeiculo = idVeiculo;
    }
    public int getIdMotorista() {
        return idMotorista;
    }
    public void setIdMotorista(int idMotorista) {
        this.idMotorista = idMotorista;
    }

}
