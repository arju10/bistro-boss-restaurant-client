const AboutBanner = () => {
    const sectionStyle = {
        backgroundImage: 'url("../../../../assets/home/chef-service.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50vh',
        
    };

    const cardStyle = {
        width: '70%', 
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '20px',
        borderRadius: '8px', 
    };

    const titleStyle = {
        fontFamily: 'Cinzel, serif', 
        fontSize: '30px', 
        fontWeight: 'bold',
    };

    return (
        <section style={sectionStyle}>
            <div className="card" style={cardStyle}>
                <div className="card-body text-center">
                    <h2 className="card-title-center text-lg" style={titleStyle}>
                        BISTRO BOSS
                    </h2>
                    <p className  = "text-sm text-gray-700">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa assumenda sequi dolor deserunt consequuntur cupiditate magni dicta? Ex nobis mollitia quae laborum, adipisci excepturi repudiandae autem odio asperiores alias laudantium.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutBanner;
