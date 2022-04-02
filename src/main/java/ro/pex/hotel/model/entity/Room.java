package ro.pex.hotel.model.entity;

import javax.persistence.*;

@Entity
@Table(name = "rooms")
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

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getType() {
		return Type;
	}

	public void setType(String Type) {
		this.Type = Type;
	}

	public String getBed() {
		return Bed;
	}

	public void setBed(String Bed) {
		this.Bed = Bed;
	}

	public int getFloor() {
		return Floor;
	}

	public void setFloor(int Floor) {
		this.Floor = Floor;
	}

	public int getNumber() {
		return Number;
	}

	public void setNumber(int Number) {
		this.Number = Number;
	}

	public boolean isRelaxArea() {
		return RelaxArea;
	}

	public void setRelaxArea(boolean RelaxArea) {
		this.RelaxArea = RelaxArea;
	}

	public int getPrice() {
		return Price;
	}

	public void setPrice(int Price) {
		this.Price = Price;
	}

	public boolean isBathShower() {
		return BathShower;
	}

	public void setBathShower(boolean BathShower) {
		this.BathShower = BathShower;
	}

}
