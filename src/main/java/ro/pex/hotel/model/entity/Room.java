package ro.pex.hotel.model.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "room")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    private String Type;
    
    private String Bed;
    
    private int Floor;
    
    private int Number;
    
    private boolean RelaxArea;
    
    private int Price;
    
    private boolean BathShower;
    
    @ManyToOne
    @JoinColumn(name = "reservation_id")
    private Reservation reservation;

    public String getType() {
        return Type;
    }

    public void setType(String Type) {
        this.Type = Type;
    }

    public String getBed() {
        return Bed;
    }

    /**
     * @param Bed the Bed to set
     */
    public void setBed(String Bed) {
        this.Bed = Bed;
    }

    /**
     * @return the Floor
     */
    public int getFloor() {
        return Floor;
    }

    /**
     * @param Floor the Floor to set
     */
    public void setFloor(int Floor) {
        this.Floor = Floor;
    }

    /**
     * @return the Number
     */
    public int getNumber() {
        return Number;
    }

    /**
     * @param Number the Number to set
     */
    public void setNumber(int Number) {
        this.Number = Number;
    }

    /**
     * @return the RelaxArea
     */
    public boolean isRelaxArea() {
        return RelaxArea;
    }

    /**
     * @param RelaxArea the RelaxArea to set
     */
    public void setRelaxArea(boolean RelaxArea) {
        this.RelaxArea = RelaxArea;
    }

    /**
     * @return the Price
     */
    public int getPrice() {
        return Price;
    }

    /**
     * @param Price the Price to set
     */
    public void setPrice(int Price) {
        this.Price = Price;
    }

    /**
     * @return the BathShower
     */
    public boolean isBathShower() {
        return BathShower;
    }

    /**
     * @param BathShower the BathShower to set
     */
    public void setBathShower(boolean BathShower) {
        this.BathShower = BathShower;
    }
}
