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
public class SongsRecord extends org.jooq.impl.TableRecordImpl<com.clicdirectory.tables.records.SongsRecord> implements org.jooq.Record7<java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.Long, java.lang.String, java.lang.Long> {

	private static final long serialVersionUID = 397306391;

	/**
	 * Setter for <code>public.songs.name</code>.
	 */
	public void setName(java.lang.String value) {
		setValue(0, value);
	}

	/**
	 * Getter for <code>public.songs.name</code>.
	 */
	public java.lang.String getName() {
		return (java.lang.String) getValue(0);
	}

	/**
	 * Setter for <code>public.songs.link</code>.
	 */
	public void setLink(java.lang.String value) {
		setValue(1, value);
	}

	/**
	 * Getter for <code>public.songs.link</code>.
	 */
	public java.lang.String getLink() {
		return (java.lang.String) getValue(1);
	}

	/**
	 * Setter for <code>public.songs.director</code>.
	 */
	public void setDirector(java.lang.String value) {
		setValue(2, value);
	}

	/**
	 * Getter for <code>public.songs.director</code>.
	 */
	public java.lang.String getDirector() {
		return (java.lang.String) getValue(2);
	}

	/**
	 * Setter for <code>public.songs.movie</code>.
	 */
	public void setMovie(java.lang.String value) {
		setValue(3, value);
	}

	/**
	 * Getter for <code>public.songs.movie</code>.
	 */
	public java.lang.String getMovie() {
		return (java.lang.String) getValue(3);
	}

	/**
	 * Setter for <code>public.songs.album_id</code>.
	 */
	public void setAlbumId(java.lang.Long value) {
		setValue(4, value);
	}

	/**
	 * Getter for <code>public.songs.album_id</code>.
	 */
	public java.lang.Long getAlbumId() {
		return (java.lang.Long) getValue(4);
	}

	/**
	 * Setter for <code>public.songs.singers</code>.
	 */
	public void setSingers(java.lang.String value) {
		setValue(5, value);
	}

	/**
	 * Getter for <code>public.songs.singers</code>.
	 */
	public java.lang.String getSingers() {
		return (java.lang.String) getValue(5);
	}

	/**
	 * Setter for <code>public.songs.id</code>.
	 */
	public void setId(java.lang.Long value) {
		setValue(6, value);
	}

	/**
	 * Getter for <code>public.songs.id</code>.
	 */
	public java.lang.Long getId() {
		return (java.lang.Long) getValue(6);
	}

	// -------------------------------------------------------------------------
	// Record7 type implementation
	// -------------------------------------------------------------------------

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Row7<java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.Long, java.lang.String, java.lang.Long> fieldsRow() {
		return (org.jooq.Row7) super.fieldsRow();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Row7<java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.Long, java.lang.String, java.lang.Long> valuesRow() {
		return (org.jooq.Row7) super.valuesRow();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Field<java.lang.String> field1() {
		return com.clicdirectory.tables.Songs.SONGS.NAME;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Field<java.lang.String> field2() {
		return com.clicdirectory.tables.Songs.SONGS.LINK;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Field<java.lang.String> field3() {
		return com.clicdirectory.tables.Songs.SONGS.DIRECTOR;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Field<java.lang.String> field4() {
		return com.clicdirectory.tables.Songs.SONGS.MOVIE;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Field<java.lang.Long> field5() {
		return com.clicdirectory.tables.Songs.SONGS.ALBUM_ID;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Field<java.lang.String> field6() {
		return com.clicdirectory.tables.Songs.SONGS.SINGERS;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public org.jooq.Field<java.lang.Long> field7() {
		return com.clicdirectory.tables.Songs.SONGS.ID;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public java.lang.String value1() {
		return getName();
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
		return getDirector();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public java.lang.String value4() {
		return getMovie();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public java.lang.Long value5() {
		return getAlbumId();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public java.lang.String value6() {
		return getSingers();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public java.lang.Long value7() {
		return getId();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public SongsRecord value1(java.lang.String value) {
		setName(value);
		return this;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public SongsRecord value2(java.lang.String value) {
		setLink(value);
		return this;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public SongsRecord value3(java.lang.String value) {
		setDirector(value);
		return this;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public SongsRecord value4(java.lang.String value) {
		setMovie(value);
		return this;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public SongsRecord value5(java.lang.Long value) {
		setAlbumId(value);
		return this;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public SongsRecord value6(java.lang.String value) {
		setSingers(value);
		return this;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public SongsRecord value7(java.lang.Long value) {
		setId(value);
		return this;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public SongsRecord values(java.lang.String value1, java.lang.String value2, java.lang.String value3, java.lang.String value4, java.lang.Long value5, java.lang.String value6, java.lang.Long value7) {
		return this;
	}

	// -------------------------------------------------------------------------
	// Constructors
	// -------------------------------------------------------------------------

	/**
	 * Create a detached SongsRecord
	 */
	public SongsRecord() {
		super(com.clicdirectory.tables.Songs.SONGS);
	}

	/**
	 * Create a detached, initialised SongsRecord
	 */
	public SongsRecord(java.lang.String name, java.lang.String link, java.lang.String director, java.lang.String movie, java.lang.Long albumId, java.lang.String singers, java.lang.Long id) {
		super(com.clicdirectory.tables.Songs.SONGS);

		setValue(0, name);
		setValue(1, link);
		setValue(2, director);
		setValue(3, movie);
		setValue(4, albumId);
		setValue(5, singers);
		setValue(6, id);
	}
}
