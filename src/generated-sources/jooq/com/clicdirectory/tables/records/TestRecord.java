/**
 * This class is generated by jOOQ
 */
package com.clicdirectory.tables.records;

/**
 * This class is generated by jOOQ.
 */
@javax.annotation.Generated(value    = { "http://www.jooq.org", "3.3.2" },
                            comments = "This class is generated by jOOQ")
@java.lang.SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class TestRecord extends org.jooq.impl.TableRecordImpl<com.clicdirectory.tables.records.TestRecord> implements org.jooq.Record2<java.lang.Long, java.lang.String> {

	private static final long serialVersionUID = 840711243;

	/**
	 * Setter for <code>public.Test.No.</code>.
	 */
	public void setNo_2e(java.lang.Long value) {
		setValue(0, value);
	}

	/**
	 * Getter for <code>public.Test.No.</code>.
	 */
	public java.lang.Long getNo_2e() {
		return (java.lang.Long) getValue(0);
	}

	/**
	 * Setter for <code>public.Test.name</code>.
	 */
	public void setName(java.lang.String value) {
		setValue(1, value);
	}

	/**
	 * Getter for <code>public.Test.name</code>.
	 */
	public java.lang.String getName() {
		return (java.lang.String) getValue(1);
	}

	// -------------------------------------------------------------------------
	// Record2 type implementation
	// -------------------------------------------------------------------------

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Row2<java.lang.Long, java.lang.String> fieldsRow() {
		return (org.jooq.Row2) super.fieldsRow();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Row2<java.lang.Long, java.lang.String> valuesRow() {
		return (org.jooq.Row2) super.valuesRow();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Field<java.lang.Long> field1() {
		return com.clicdirectory.tables.Test.TEST.NO_2e;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Field<java.lang.String> field2() {
		return com.clicdirectory.tables.Test.TEST.NAME;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public java.lang.Long value1() {
		return getNo_2e();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public java.lang.String value2() {
		return getName();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public TestRecord value1(java.lang.Long value) {
		setNo_2e(value);
		return this;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public TestRecord value2(java.lang.String value) {
		setName(value);
		return this;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public TestRecord values(java.lang.Long value1, java.lang.String value2) {
		return this;
	}

	// -------------------------------------------------------------------------
	// Constructors
	// -------------------------------------------------------------------------

	/**
	 * Create a detached TestRecord
	 */
	public TestRecord() {
		super(com.clicdirectory.tables.Test.TEST);
	}

	/**
	 * Create a detached, initialised TestRecord
	 */
	public TestRecord(java.lang.Long no_2e, java.lang.String name) {
		super(com.clicdirectory.tables.Test.TEST);

		setValue(0, no_2e);
		setValue(1, name);
	}
}