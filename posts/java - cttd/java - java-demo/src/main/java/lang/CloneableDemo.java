package lang;

public class CloneableDemo {

	private static MyObject g(MyObject v) {
		// Passing a reference, modifies outside object
		v.increment();
		return v;
	}

	private static MyObject f(MyObject v) {
		// Local copy
		v = (MyObject) v.clone();
		v.increment();
		return v;
	}

	public static void main(String[] args) {
		MyObject a = new MyObject(11);
		MyObject b = g(a);
		// Reference equivalence, not object equivalence:
		System.out.println("a == b: " + (a == b) + "\na = " + a + "\nb = " + b);
		
		MyObject c = new MyObject(47);
		MyObject d = f(c);
		System.out.println("c == d: " + (c == d) + "\nc = " + c + "\nd = " + d);
	}
}

// Creating local copies with clone()
class MyObject implements Cloneable {

	private int n;

	public MyObject(int n) {
		this.n = n;
	}

	@Override
	public Object clone() {
		Object o = null;
		try {
			o = super.clone();
		} catch (CloneNotSupportedException e) {
			System.err.println("MyObject can't clone");
		}
		return o;
	}

	public int getValue() {
		return n;
	}

	public void setValue(int n) {
		this.n = n;
	}

	public void increment() {
		n++;
	}

	@Override
	public String toString() {
		return Integer.toString(n);
	}
}
