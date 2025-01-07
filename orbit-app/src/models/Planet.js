class Planet {
    constructor(id, name, image, description, style) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.description = description;
        this.style = style;
    }

    getPlanetStyle() {
        return {
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: `url(${this.image}) no-repeat center center`,
            backgroundSize: 'cover',
            position: 'absolute',
            ...this.style,
        };
    }
}

export default Planet;
