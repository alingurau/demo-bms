package api.models;

import javax.validation.constraints.NotNull;

public class ListBySuperUserTerm {

    @NotNull
    private String term;

    public String getTerm() {
        return term;
    }

    public void setTerm(String term) {
        this.term = term;
    }
}
