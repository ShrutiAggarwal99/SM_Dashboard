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
public class ExpRecord extends org.jooq.impl.TableRecordImpl<com.clicdirectory.tables.records.ExpRecord> implements org.jooq.Record8<java.lang.String, java.lang.String, java.lang.String, java.lang.Boolean, java.lang.String, java.lang.String, java.lang.String, java.lang.Long> {

	private static final long serialVersionUID = 786672992;

	/**
	 * Setter for <code>public.exp.movie</code>.
	 */
	public void setMovie(java.lang.String value) {
		setValue(0, value);
	}

	/**
	 * Getter for <code>public.exp.movie</code>.
	 */
	public java.lang.String getMovie() {
		return (java.lang.String) getValue(0);
	}

	/**
	 * Setter for <code>public.exp.link</code>.
	 */
	public void setLink(java.lang.String value) {
		setValue(1, value);
	}

	/**
	 * Getter for <code>public.exp.link</code>.
	 */
	public java.lang.String getLink() {
		return (java.lang.String) getValue(1);
	}

	/**
	 * Setter for <code>public.exp.img</code>.
	 */
	public void setImg(java.lang.String value) {
		setValue(2, value);
	}

	/**
	 * Getter for <code>public.exp.img</code>.
	 */
	public java.lang.String getImg() {
		return (java.lang.String) getValue(2);
	}

	/**
	 * Setter for <code>public.exp.is_fetched</code>.
	 */
	public void setIsFetched(java.lang.Boolean value) {
		setValue(3, value);
	}

	/**
	 * Getter for <code>public.exp.is_fetched</code>.
	 */
	public java.lang.Boolean getIsFetched() {
		return (java.lang.Boolean) getValue(3);
	}

	/**
	 * Setter for <code>public.exp.released</code>.
	 */
	public void setReleased(java.lang.String value) {
		setValue(4, value);
	}

	/**
	 * Getter for <code>public.exp.released</code>.
	 */
	public java.lang.String getReleased() {
		return (java.lang.String) getValue(4);
	}

	/**
	 * Setter for <code>public.exp.cast</code>.
	 */
	public void setCast(java.lang.String value) {
		setValue(5, value);
	}

	/**
	 * Getter for <code>public.exp.cast</code>.
	 */
	public java.lang.String getCast() {
		return (java.lang.String) getValue(5);
	}

	/**
	 * Setter for <code>public.exp.director</code>.
	 */
	public void setDirector(java.lang.String value) {
		setValue(6, value);
	}

	/**
	 * Getter for <code>public.exp.director</code>.
	 */
	public java.lang.String getDirector() {
		return (java.lang.String) getValue(6);
	}

	/**
	 * Setter for <code>public.exp.id</code>.
	 */
	public void setId(java.lang.Long value) {
		setValue(7, value);
	}

	/**
	 * Getter for <code>public.exp.id</code>.
	 */
	public java.lang.Long getId() {
		return (java.lang.Long) getValue(7);
	}

	// -------------------------------------------------------------------------
	// Record8 type implementation
	// -------------------------------------------------------------------------

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Row8<java.lang.String, java.lang.String, java.lang.String, java.lang.Boolean, java.lang.String, java.lang.String, java.lang.String, java.lang.Long> fieldsRow() {
		return (org.jooq.Row8) super.fieldsRow();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Row8<java.lang.String, java.lang.String, java.lang.String, java.lang.Boolean, java.lang.String, java.lang.String, java.lang.String, java.lang.Long> valuesRow() {
		return (org.jooq.Row8) super.valuesRow();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Field<java.lang.String> field1() {
		return com.clicdirectory.tables.Exp.EXP.MOVIE;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Field<java.lang.String> field2() {
		return com.clicdirectory.tables.Exp.EXP.LINK;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Field<java.lang.String> field3() {
		return com.clicdirectory.tables.Exp.EXP.IMG;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Field<java.lang.Boolean> field4() {
		return com.clicdirectory.tables.Exp.EXP.IS_FETCHED;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Field<java.lang.String> field5() {
		return com.clicdirectory.tables.Exp.EXP.RELEASED;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Field<java.lang.String> field6() {
		return com.clicdirectory.tables.Exp.EXP.CAST;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Field<java.lang.String> field7() {
		return com.clicdirectory.tables.Exp.EXP.DIRECTOR;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Field<java.lang.Long> field8() {
		return com.clicdirectory.tables.Exp.EXP.ID;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public java.lang.String value1() {
		return getMovie();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public java.lang.String value2() {
		return getLink();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public java.lang.String value3() {
		return getImg();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public java.lang.Boolean value4() {
		return getIsFetched();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public java.lang.String value5() {
		return getReleased();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public java.lang.String value6() {
		return getCast();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public java.lang.String value7() {
		return getDirector();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public java.lang.Long value8() {
		return getId();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public ExpRecord value1(java.lang.String value) {
		setMovie(value);
		return this;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public ExpRecord value2(java.lang.String value) {
		setLink(value);
		return this;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public ExpRecord value3(java.lang.String value) {
		setImg(value);
		return this;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public ExpRecord value4(java.lang.Boolean value) {
		setIsFetched(value);
		return this;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public ExpRecord value5(java.lang.String value) {
		setReleased(value);
		return this;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public ExpRecord value6(java.lang.String value) {
		setCast(value);
		return this;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public ExpRecord value7(java.lang.String value) {
		setDirector(value);
		return this;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public ExpRecord value8(java.lang.Long value) {
		setId(value);
		return this;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public ExpRecord values(java.lang.String value1, java.lang.String value2, java.lang.String value3, java.lang.Boolean value4, java.lang.String value5, java.lang.String value6, java.lang.String value7, java.lang.Long value8) {
		return this;
	}

	// -------------------------------------------------------------------------
	// Constructors
	// -------------------------------------------------------------------------

	/**
	 * Create a detached ExpRecord
	 */
	public ExpRecord() {
		super(com.clicdirectory.tables.Exp.EXP);
	}

	/**
	 * Create a detached, initialised ExpRecord
	 */
	public ExpRecord(java.lang.String movie, java.lang.String link, java.lang.String img, java.lang.Boolean isFetched, java.lang.String released, java.lang.String cast, java.lang.String director, java.lang.Long id) {
		super(com.clicdirectory.tables.Exp.EXP);

		setValue(0, movie);
		setValue(1, link);
		setValue(2, img);
		setValue(3, isFetched);
		setValue(4, released);
		setValue(5, cast);
		setValue(6, director);
		setValue(7, id);
	}
}