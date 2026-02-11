export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    image: string;
    category: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'MELF Resistor – Semiconductor Product',
        slug: 'melf-resistor-semiconductor-product',
        excerpt: 'Serente Electronics HK LTD is the largest distributor of MELF Resistors, partnered with Firstohm, a leading manufacturer of specialty resistors.',
        content: `
            <img src="/blog/content/melf-resistor-banner.jpg" alt="What is a MELF Resistor? Introduction" class="blog-banner-image" />

            <p><a href="https://www.serentehk.com/">Serente Electronics HK LTD</a> is the largest distributor of MELF Resistors, Partnered with <a href="https://www.serentehk.com/">Firstohm</a>.</p>

            <p><a href="https://www.serentehk.com/">Firstohm</a> manufactures a wide variety of specialty resistors and is one of Taiwan's top producers of thin-film passive components. MELF resistors, anti-surge resistors, current-sense resistors, fusible resistors, high frequency resistors, high voltage resistors, high power resistors, wire-wound resistors, and so forth are examples of these items.</p>

            <h3>Surge Resistant MELF Resistor Manufacturer | <a href="https://www.serentehk.com/">FIRSTOHM</a></h3>
            <p>First Resistor &amp; Condenser CO. LTD. is a Taiwan-based company that has been producing MELF resistors since 1969. Automotive grade resistors, surface mount resistors, fusible resistors, SMD resistors, chip resistors, fixed resistors, and fusible thin film resistors are among their primary thin film MELF resistors. These resistors are extensively utilized in industrial applications like power supplies, smart meters, solar inverters, energy storage devices, electric vehicles, communication equipment, and medical devices.</p>

            <p>One kind of leadless cylindrical electronic surface mount device package with metal end terminals is called a metal electrode leadless face (MELF). The most popular MELF devices are resistors and diodes.</p>

            <p>One of the few businesses that can create thin-film MELF resistors with excellent quality and dependability in accordance with customer specifications is <a href="https://www.serentehk.com/">Firstohm</a>. Since 1969, they have been an ISO9001/14001 certified producer with a focus on thin-film resistors.</p>

            <p>Since 1969, <a href="https://www.serentehk.com/">Firstohm</a> has been offering consumers premium carbon film and metal film resistors. With its cutting-edge technology and 56 years of experience, <a href="https://www.serentehk.com/">Firstohm</a> makes sure that every customer's needs are satisfied.</p>

            <p>View our quality resistor <a href="https://www.serentehk.com/products">products</a>&nbsp;and feel free to&nbsp;<a href="https://www.serentehk.com/contact">Contact Us</a>. By Our top Semiconductor distributor – <a href="https://www.serentehk.com/products">Serente Electronics HK LTD</a></p>
        `,
        date: 'January 15, 2025',
        author: 'Serente Electronics',
        image: '/blog/melf-resistor-semiconductor-product.jpg',
        category: 'Product Spotlight'
    },
    {
        id: '2',
        title: 'Aerospace Connectors from OCETA',
        slug: 'aerospace-connectors-from-oceta',
        excerpt: 'Interfaces that maintain the power and communication of aircraft and spacecraft systems are provided by aerospace connectors.',
        content: `
            <img src="/blog/content/aerospace-connectors-banner.png" alt="Connectors for the Aerospace Industry" class="blog-banner-image" />

            <p>Interfaces that maintain the power and communication of aircraft and spacecraft systems are provided by aerospace connectors. They have to endure a variety of harsh circumstances, such as shock, vibration, temperature fluctuations, dampness, and more. With an emphasis on avionics, power distribution, and other equipment operating under challenging conditions, this article discusses six major connector families used in aerospace and their usual applications.</p>

            <p>High vibration, temperature fluctuations, and high-altitude, non-outgassing environments are just a few of the harsh circumstances that aerospace connectors are made to withstand.</p>

            <p><a href="https://www.serentehk.com/">MIL-DTL-38999 circular connectors</a>, <a href="https://www.serentehk.com/">ARINC 600 rack-and-panel connectors</a>, and fiber optic solutions are important types that frequently use MIL-SPEC specifications for durability in data, power, and avionics systems.</p>

            <h3>Key Types and Standards:</h3>
            <ul>
                <li><strong>MIL-DTL-38999 (8D Series):</strong> High-density, signal, power, coax, and fiber optic connectors are the most often used circular connectors in the aerospace industry. The aerospace and defense sectors make extensive use of MIL-DTL-38999 connections, which are high-performance circular aerospace connectors. They are designed to withstand harsh environments, including vibration, shock, and dampness, and they connect cable harnesses in military vehicles, airplanes, and satellites. They are perfect for radar, communications systems, and flight controls because of their large pin counts and power connectors.</li>
                <li><strong>ARINC 600 &amp; 400 Series:</strong> Standard rectangular, blind-mate rack-and-panel connectors for communication, avionics, and in-flight entertainment. The typical rectangular rack-and-panel connectors for aviation avionics are called ARINC 600 connectors. They connect avionics line-replaceable units (LRUs) to the aircraft wire harness, including navigation modules and flight computers. Modular avionics systems with simple equipment replacement and hot-swappable components are made possible by these huge connectors, which allow extremely high pin counts (hundreds of signal contacts).</li>
                <li><strong>D-Subminiature (HD/DD Series):</strong> High-performance rectangular connectors that frequently satisfy Goddard Space Flight Center S-311 requirements for use in space travel and aviation. Compact rectangular connectors for data and signal connections are known as D-Subminiature (D-Sub) connectors. They are utilized in ground-support electronics, military vehicles, and avionics equipment and are qualified to MIL-DTL-24308.</li>
                <li><strong>RF/Coaxial Connectors:</strong> High-voltage, high-frequency systems and secure antenna connections use TNC (threaded), BNC, and HN connectors. Offering the largest selection of RF coaxial connectors in the market makes <a href="https://www.serentehk.com/">OCETA</a> proud. We provide 55 product series, including AEP and Mil QPL connections, and more than 13,000 part numbers.</li>
                <li><strong>Specialized Connectors:</strong> Fiber optic and hermetically sealed connectors, as well as Nano-D and Micro-D connectors for smaller applications. They are frequently made with hermetic sealing, which offers safe protection in controlled settings and glovebox feed-thru assemblies. Some types can operate at temperatures as low as -75 °C and as high as almost +1000 °C.</li>
            </ul>

            <h3>Key Characteristics and Applications</h3>
            <ul>
                <li><strong>Environmental Resistance:</strong> designed to withstand heavy vibration, corrosion, EMI shielding, and temperature extremes (such as −55°C to 125°C).</li>
                <li><strong>Materials:</strong> built from composites, stainless steel, or 6061-T6 aluminum.</li>
                <li><strong>Applications:</strong> UAVs, defense, cabin systems, avionics, and cockpit systems.</li>
                <li><strong>Manufacturers:</strong> <a href="https://www.serentehk.com/">OCETA</a>, <a href="https://www.serentehk.com/">ITT Cannon</a>, <a href="https://www.serentehk.com/">Positronic</a>, and <a href="https://www.serentehk.com/">Radiall</a> are some of the major vendors.</li>
            </ul>

            <p>The Best semiconductor components suppliers for Aerospace in Hong Kong is <a href="https://www.serentehk.com/">Serente Electronics HK LTD.</a></p>
        `,
        date: 'January 16, 2025',
        author: 'Serente Electronics',
        image: '/blog/aerospace-connectors-from-oceta.png',
        category: 'Industry Trends'
    },
    {
        id: '3',
        title: 'GL-Fiber Manufacturer and Exporter',
        slug: 'gl-fiber-manufacturer-exporter',
        excerpt: 'Hunan GL Technology Co., Ltd (GL FIBER) is China\'s top manufacturer of fiber optic cables and accessories with over 21 years of experience.',
        content: `
            <img src="/blog/content/gl-fiber-banner.jpg" alt="GL FIBER - Fiber Optic Cable Manufacturer" class="blog-banner-image" />

            <h3>About <a href="https://www.serentehk.com/">GL Fiber</a></h3>
            <p>Located in Changsha, Hunan, the city of the legendary Chairman Mao, Hunan GL Technology Co., Ltd (<a href="https://www.serentehk.com/">GL FIBER</a>) was established in 2004 and has over 21 years of experience as China's top manufacturer of fiber optic cables and accessories. Our cables have built a vast global sales network over the last 21 years.</p>

            <p>Of GL's more than 550 employees, 70% work in the technical and research department, 8 are physicians, 30 have master's degrees, and more than 200 have bachelor's degrees. Every member of the crew has a strong sense of creativity and teamwork, as well as a wealth of professional knowledge and experience in the fiber optic cable industry.</p>

            <p>In 2015, <a href="https://www.serentehk.com/">GL Fiber</a> obtained ISO 9001:2015 Quality Systems accreditation. Our products are well-known both domestically and internationally because to our flawless quality control system, skilled technical staff, cutting-edge machinery, and dependable quality. In the fiber optic cable sector, GL has emerged as the most dependable partner.</p>

            <h3><a href="https://www.serentehk.com/">GL-Fiber</a> Products</h3>
            <p>ADSS, OPGW, OPPC power optical cable, outdoor direct-buried/duct/aerial fiber optic cables, anti-rodent optical cables, military optical cables, underwater cables, air-blown micro cables, photoelectric hybrid cables, base station pulling fiber optic cables, FTTH outdoor and indoor drop cables, and series FTTH accessories, including optical fiber patch cords, splitters, adapters, patch panels, etc.</p>

            <h3>Manufacturing Facilities</h3>
            <p>There are currently 18 sets of coloring equipment, 10 sets of secondary plastic coating equipment, 15 sets of SZ layer twisting equipment, 16 sets of sheathing equipment, 8 sets of FTTH drop cable manufacturing equipment, 20 sets of OPGW optical cable equipment, and 1 paralleling equipment at GL Fiber. as well as numerous other auxiliary production tools.</p>

            <p>Currently, 12 million core-km of optical cables can be produced annually (with an average daily production capacity of 45,000 core km and types of cables that can reach 1,500 km). A variety of indoor and outdoor optical cables, including ADSS, GYFTY, GYTS, GYTA, GYFTC8Y, air-blown micro-cable, etc., may be produced in our factories.</p>

            <p>Common cables can produce up to 1500 kilometers per day, drop cables can produce up to 1200 kilometers per day, and OPGW can produce up to 200 kilometers per day.</p>

            <p><a href="https://www.serentehk.com/">GL-Fiber's</a> one of the most Industrial Semiconductor Supplier in Hong Kong is <a href="https://www.serentehk.com/">Serente Electronics HK LTD.</a></p>
        `,
        date: 'January 17, 2025',
        author: 'Serente Electronics',
        image: '/blog/gl-fiber-manufacturer-exporter.jpg',
        category: 'Product Spotlight'
    },
    {
        id: '4',
        title: 'Display LCD Module Supplier',
        slug: 'display-lcd-module-supplier',
        excerpt: 'Vitek Display Co., Ltd. is the industry leader in LCD modules, dedicated to producing high-quality products for industrial LCD displays.',
        content: `
            <img src="/blog/content/display-lcd-banner.jpg" alt="8 inch IPS TFT LCD Display" class="blog-banner-image" />

            <p>The industry leader in LCD modules, <a href="https://www.serentehk.com/">Vitek Display Co., Ltd.,</a> was founded in 2005 and has dedicated itself to producing high-quality products for industrial LCD displays, such as monochrome TN/STN/FSTN LCM, COG LCD, VATN-LCD, TFT LCD, OLED display modules, and System Integrated Solutions. Vitek has emerged as the industry leader in LCD modules. It also offers a range of solutions for small and medium-sized displays, and its ongoing innovation has made it the world's leading supplier of irreplaceable display LCD modules.</p>

            <p>With over 20 years of expertise, Vitek became exceptionally skilled in handling complex orders, particularly on flexible operation business models such as Low-Volume-High-Mix (LVHM) and High-Volume-Low-Mix (HVLM). In addition, we offer <a href="https://www.serentehk.com/">OEM</a> (original equipment manufacture) and <a href="https://www.serentehk.com/">ODM</a> (original design manufacturing) services to our clients. To meet the needs and expectations of our clients, this is our most crucial core competency. We are a client solution partner in addition to being a <a href="https://www.serentehk.com/">supplier of LCD display modules</a>.</p>

            <p><a href="https://www.serentehk.com/">Vitek</a> has extensive expertise in autonomous research and development. Vitek Display has received ISO approval for both ROHS/REACH certification and ISO9001 quality. We adhere to a stringent quality management system, and every product has undergone numerous stringent testing and verifications to guarantee that its quality satisfies global standards. We can also swiftly and reliably satisfy client demands thanks to our effective production lines and comprehensive <a href="https://www.serentehk.com/">supply chain management system</a>.</p>

            <p>As the industry's top supplier of display LCD modules, <a href="https://www.serentehk.com/">Vitek's</a> products are widely used in commodities electronics, medical equipment, automotive, industrial automation, HMI (smart homes), and other industries. They have a solid reputation and are well-liked by consumers.</p>

            <p><a href="https://www.serentehk.com/">Vitek</a> will persist in its commitment to providing <a href="https://www.serentehk.com/">LCD, TFT, OLED</a>, embedded systems, and System Integrated Solutions display development and design. As a growing company with years of experience, we have over 800 domestic clients, many of whom are listed businesses. We also Plow the market worldwide based on our mutual trust and positive relationship with them.</p>

            <h3>Key Features:</h3>
            <ul>
                <li>High-quality</li>
                <li>Flexible delivery</li>
                <li>Quick response time</li>
                <li>Strong R&amp;D capability</li>
                <li>Professional Technique advice</li>
                <li>Prior after-sales service</li>
            </ul>

            <p>Please contact <a href="https://www.serentehk.com/">Serente Electronics HK LTD</a> and let us provide you with the best quality products and services to achieve a Double-win aspect.</p>

            <p><a href="https://www.serentehk.com/">Serente Electronics HK LTD</a> is our one of the Most Best Industrial Semiconductor Supplier in Hong Kong.</p>
        `,
        date: 'January 18, 2025',
        author: 'Serente Electronics',
        image: '/blog/display-lcd-module-supplier.jpg',
        category: 'Product Spotlight'
    },
    {
        id: '5',
        title: 'One Stop Custom Display Solution Provider',
        slug: 'one-stop-custom-display-solution-provider',
        excerpt: 'SONYTEK has been collaborating with clients to deliver the best possible customer service, professional technology, and consistent product quality since 2010.',
        content: `
            <img src="/blog/content/sonytek-banner.jpg" alt="Custom Display Solutions" class="blog-banner-image" />

            <p>Since its founding in 2010, <a href="https://www.serentehk.com/">SONYTEK</a> has been collaborating with its clients to deliver the best possible customer service, professional technology, consistent product quality, competitive pricing, and effective delivery. It has also been steadily expanding its core capabilities and consistently developing business plans to satisfy client demands.</p>

            <p>Designing and manufacturing standard and custom <a href="https://www.serentehk.com/">TFT LCD displays</a>, as well as mono LCD displays (mono character, mono graphic, and mono segment), is <a href="https://www.serentehk.com/">Sonytek Display Co., Limited's</a> primary focus.</p>

            <p>One of the most reputable suppliers in the LCD display sector since its founding in 2010 is <a href="https://www.serentehk.com/">Sonytek Display Co., Limited</a>. Sonytek guarantees 100% customer satisfaction with cutting-edge technology and an extensive quality control system. We have passed ISO9001 and LCD display certified RoHS.</p>

            <p>We have established two facilities that are currently in production in order to better service our consumers across the world. <a href="https://www.serentehk.com/">Sonytek</a> has been collaborating with our clients to deliver the best possible customer service, professional technology, consistent product quality, competitive pricing, and effective delivery. We have also been steadily expanding our core competencies and consistently developing business plans to satisfy client demands.</p>

            <h3><a href="https://www.serentehk.com/">Sonytek</a> Company Target</h3>
            <p>Our goal is to become your go-to partner for display solutions, improve customer satisfaction, and offer exceptional display solutions. Quality is always our top priority, whether it's a custom project or one of our conventional goods. In order to give our clients the best possible pricing and timing, we are always improving our procedure.</p>

            <p><a href="https://www.serentehk.com/">Sonytek</a> is a best manufacturing company for the Semiconductor products, and <a href="https://www.serentehk.com/">Serente Electronic HK LTD</a> is best Hong Kong semiconductor distributor.</p>
        `,
        date: 'January 19, 2025',
        author: 'Serente Electronics',
        image: '/blog/one-stop-custom-display-solution-provider.jpg',
        category: 'Product Spotlight'
    },
    {
        id: '6',
        title: 'Kingtronics Journey in Semiconductor Industry',
        slug: 'kingtronics-journey-semiconductor-industry',
        excerpt: 'Kingtronics, a well-known producer of electronic components, was established in Hong Kong in 1990 and specializes in bridge rectifiers, trimmer potentiometers, and premium capacitors.',
        content: `
            <img src="/blog/content/kingtronics-banner.png" alt="Kingtronics - Electronic Components Manufacturer" class="blog-banner-image" />

            <p><a href="https://www.serentehk.com/">Kingtronics</a>, a well-known producer of electronic components, was established in Hong Kong in 1990. It employs about 650 people and has production sites in Sichuan and Guangdong, China. Bridge rectifiers, trimmer potentiometers, premium capacitors, and more are among our specialties. We are a reputable partner for companies all over the world thanks to our cutting-edge technology, strict quality control, and dependable supply chain.</p>

            <h3>History Of <a href="https://www.serentehk.com/">Kingtronics</a>:</h3>
            <p><strong>In 1990:</strong> Established 1st Trimmer Snap-in, Screw &amp; Potentiometer factory.</p>
            <p><strong>In 1995:</strong> Started to Produce Radial, Lug type Aluminum E-cap.</p>
            <p><strong>In 1997:</strong> Added Tantalum &amp; Ceramic Capacitor Production Line.</p>
            <p><strong>In 1998:</strong> Set up Mainland Sales Office and HK Warehouse.</p>
            <p><strong>In 2000:</strong> Expanded production line to Active Components.</p>
            <p><strong>In 2005:</strong> Got ISO 9001:2008 Quality Management System Certification.</p>
            <p><strong>In 2015:</strong> Taiwan Sales Office Launched</p>
            <p><strong>In 2018:</strong> Added 3mm SMD Ceramic Trimmer Capacitors</p>
            <p><strong>In 2020-2023:</strong> Output Over 80M HKD Every Year</p>
            <p><strong>In 2023:</strong> Applied VDE, ENEC, UL, ROHS, Reach and CE Certifications Successfully</p>

            <h3>Manufacturing Facilities:</h3>
            <p>We guarantee steady output, constant quality, and complete control over every stage of production thanks to our ISO-certified facilities and automated manufacturing lines.</p>

            <h3>Quality Control Process:</h3>
            <p>By putting in place a rigorous six-step quality control procedure, we are dedicated to providing high-quality capacitors. Every step, from receiving materials to packaging, guarantees dependability and continuous performance.</p>
            <ul>
                <li>Incoming Material Inspection</li>
                <li>Winding / Assembly Process</li>
                <li>Impregnation (for Electrolytic Capacitors)</li>
                <li>Aging Process</li>
                <li>Electrical Testing</li>
                <li>Final Inspection &amp; Packaging</li>
            </ul>

            <h3>Commitment to Quality &amp; Certifications:</h3>
            <p>Strict quality control and international certifications, such as ISO 9001, ISO 14001, RoHS, REACH, and UL (for some products), enable <a href="https://www.serentehk.com/">Kingtronics</a> to supply dependable components. We adhere to international standards to guarantee client trust, safety, and consistency across the globe.</p>

            <p>Best Distributor Partner Of <a href="https://www.serentehk.com/">Kingtronics</a> is <a href="https://www.serentehk.com/">Serente Electronics HK LTD</a>. They are the Top Industrial Suppliers of Semiconductors in Hong Kong.</p>
        `,
        date: 'January 20, 2025',
        author: 'Serente Electronics',
        image: '/blog/kingtronics-journey-semiconductor-industry.jpg',
        category: 'Company Profile'
    },
    {
        id: '7',
        title: 'Palm Technology – The Manufacturing Unit of Semiconductors',
        slug: 'palm-technology-manufacturing-unit-semiconductors',
        excerpt: 'Palm Technology has been focused on manufacturing LCD displays and related components since 2000, with facilities in Taiwan and mainland China.',
        content: `
            <img src="/blog/content/palm-technology-banner.jpg" alt="Palm Technology - LCD Manufacturing" class="blog-banner-image" />

            <p>Since our founding in 2000, we have made sure that the manufacturing facilities in Taiwan and mainland China are outfitted with cutting-edge equipment.</p>

            <p>We have developed a variety of products, including COB, COG, TAB, COF LCM, TFT LCD Module, Backlight, Touch Panel, and OLED Module, thanks to our strong technical support and skilled R&amp;D team.</p>

            <p>As an ISO-certified business, we have promised to deliver high-quality liquid crystal display items to our clients promptly and competently.</p>

            <h3>Story Of <a href="https://www.serentehk.com/">Palm Company</a>:</h3>
            <p>Located in Kaohsiung, Taiwan, <a href="https://www.serentehk.com/">Palm Technology</a> was founded in 2000. Character alphanumeric LCD modules, monochrome graphic LCDs, static (segment) displays, TFT, and bespoke LCD displays are among the display products that Palm Technology manufactures using LCD and LCM.</p>

            <p>The aim of <a href="https://www.serentehk.com/">Palm Technology</a> was to create an all-encompassing, interactive service that would handle every customer's requirement and improve our way of working, learning, and living. We assembled a team with more than 20 years of successful innovation in LCD and LCM electronics and communications to accomplish this. Solar, education, consumer electronics, healthcare, payment machines, meters, and more are among the applications for our products.</p>

            <h3>Vision of <a href="https://www.serentehk.com/">Palm Technology</a>:</h3>
            <p>We are dedicated to creating cutting-edge technologies created especially to revitalize unmatched LCD, LCM, TFT, OLED, Touch Panel, and Industrial Control environments.</p>

            <p>Additionally, we are committed to simplifying our clients' designs by offering comprehensive personal technology assistance that integrates the capabilities of multiple component assemblies into a single, potent solution.</p>

            <ul>
                <li>We can achieve a yield rate of 100 PPM thanks to our cutting-edge machinery. To offer various products and designs, including COB, TAB, COG, COF, and SMT assembly, in accordance with the needs of various clients.</li>
                <li>In order to provide excellent customer service, we are also involved in TFT and Backlight design and manufacture in order to improve and increase our market rivalry in terms of price, quality, and variety of products.</li>
            </ul>

            <p>Our objective is to become the leading supplier of LCD, LCM, TFT, OLED, Backlight, Touch Panel, and Industrial Control design, as well as to develop new technologies that make this faster and more convenient than before!</p>

            <p>Our Most trusted distributor in Hong Kong is <a href="https://www.serentehk.com/">Serente Electronics HK LTD</a>. They are the Top BOM sourcing and electronics supply in Hong Kong.</p>
        `,
        date: 'January 21, 2025',
        author: 'Serente Electronics',
        image: '/blog/palm-technology-manufacturing-unit-semiconductors.jpg',
        category: 'Company Profile'
    },
    {
        id: '8',
        title: 'Industrial Semiconductor Supplier',
        slug: 'industrial-semiconductor-supplier',
        excerpt: 'Taimates Enterprise Corp. has focused on exporting industrial footwear, heated clothing, and other unique materials since 1985.',
        content: `
            <img src="/blog/content/taimates-banner.png" alt="Industrial Semiconductor Supply Chain" class="blog-banner-image" />

            <p>For more than 25 years, <a href="https://www.serentehk.com/">Taimates Enterprise Corp</a>., which was established in 1985, has focused on exporting industrial footwear, heated clothing, and other unique materials. North America and Europe account for the majority of our clientele. <a href="https://www.serentehk.com/">Taimates</a>, a well-known brand in the footwear sector, has established reliable, long-term relationships with production plants in Taiwan, Vietnam, Mainland China, and Cambodia.</p>

            <p>As an OEM-focused business, we offer adaptable solutions from full design and development support to customer-driven production. <a href="https://www.serentehk.com/">Taimates</a> has also entered the electrical component industry in recent years, providing design and manufacturing services for PCBAs and displays.</p>

            <p><a href="https://www.serentehk.com/">Taimates</a> continues to play a flexible role in both traditional and electronic sectors, providing appropriate and value-added OEM/ODM products while anticipating expansion over the next 25 years.</p>

            <p>Hong Kong semiconductor distributor of <a href="https://www.serentehk.com/">Taimates</a> is <a href="https://www.serentehk.com/">Serente Electronics HK LTD</a>. The OEM &amp; ODM, Electronic components distributor.</p>
        `,
        date: 'January 22, 2025',
        author: 'Serente Electronics',
        image: '/blog/industrial-semiconductor-supplier.jpg',
        category: 'Company Profile'
    },
    {
        id: '9',
        title: 'Suppliers of Optoelectronic Parts',
        slug: 'suppliers-optoelectronic-parts',
        excerpt: 'Isocom Components specializes in optocouplers and optoswitches, high-performance infrared optoelectronic devices.',
        content: `
            <img src="/blog/content/isocom-banner.jpg" alt="Isocom - Optoelectronic Components" class="blog-banner-image" />

            <p>Leading producer of high-performance infrared optoelectronic devices, <a href="https://www.serentehk.com/">Isocom Components</a> specializes in optocouplers and optoswitches. Since the company was founded more than 25 years ago, we have continuously exceeded our clients' expectations to position ourselves as one of the most reputable brands in the global optoelectronic sector.</p>

            <p>For several items, we have the quickest production lead times in the world thanks to our specialized knowledge and adaptable manufacturing techniques. Our many loyal customers attest to our unmatched product quality and exceptional customer service.</p>

            <p>All common commercial optocoupler industry standard kinds, including those that are no longer offered by other manufacturers, have an obvious substitute in <a href="https://www.serentehk.com/">Isocom Components</a>. Furthermore, we perform unique parametric choices to satisfy the particular circuit design needs of our clients.</p>

            <p>All of our devices are available in a variety of lead forms and, if necessary, in tape and reel packaging. Our parts are approved in accordance with the most prestigious industry standards.</p>

            <h3>Key Features:</h3>
            <ul>
                <li>Special Selections</li>
                <li>Just-In-Time Delivery</li>
                <li>Superior Service</li>
                <li>Short Lead Times</li>
                <li>Unbeatable Quality</li>
                <li>Technical Support</li>
            </ul>

            <p><a href="https://www.serentehk.com/">ISOCOM</a> is a provider of optoelectronic components that meet numerous industry standards.</p>

            <p><a href="https://www.serentehk.com/">Serente Electronics HK LTD</a> is the Top <a href="https://www.serentehk.com/">Isocom Components</a> distributors in Hong Kong.</p>
        `,
        date: 'January 23, 2025',
        author: 'Serente Electronics',
        image: '/blog/suppliers-optoelectronic-parts.jpg',
        category: 'Product Spotlight'
    },
    {
        id: '10',
        title: 'Corporate Culture of Greenconn',
        slug: 'corporate-culture-greenconn',
        excerpt: 'Greenconn has been committed to offering PCB-mounted connectivity solutions while upholding environmental sustainability requirements since 1998.',
        content: `
            <img src="/blog/content/greenconn-banner.jpg" alt="Greenconn - Corporate Culture" class="blog-banner-image" />

            <p><a href="https://www.serentehk.com/">Greenconn</a> has been committed to offering PCB-mounted connectivity solutions while upholding environmental sustainability requirements since 1998. In order to serve clients all over the world, we have set up offices in Shenzhen, Kunshan, Taipei, Munich, Osaka, and Houston in addition to manufacturing facilities in China and Vietnam for more than 20 years.</p>

            <p>Quality is crucial at <a href="https://www.serentehk.com/">Greenconn</a>. Since every client is different and one-of-a-kind, we are dedicated to serving them. We keep an eye on every stage of the process to make sure our clients' needs are met to the best of our abilities, from designing and developing new goods to manufacturing automation and quality control. Additionally, we closely follow international standards like ISO 13485, IATF 16949, and ISO 9001.</p>

            <p>Through our business venture, we have grown from a tiny connector producer to one of the top connectivity experts in the globe. Our solutions have connected cutting-edge technologies in the consumer, automotive, medical, and industrial sectors that have shaped the world we love today.</p>

            <h3>R &amp; D Capability:</h3>
            <p>Our committed engineering team has created and patented designs for high power connections, high speed transceiver cables, and automotive connectors in collaboration with knowledgeable technical consultants.</p>

            <h3>High Efficiency:</h3>
            <p>All of the members of our research and development team had mechanical and electrical engineering degrees from accredited universities. Information systems and data mining help us turn our experience into standard operating procedures that are economical and efficient.</p>

            <p><a href="https://www.serentehk.com/">Greenconn</a> has steadily expanded over the last 20 years from a single, centralized operation to a group-based coordinating company. <a href="https://www.serentehk.com/">Greenconn</a> has developed into a robust supply chain. Our company's members have developed close relationships with one another, taking care of one another and sharing their talents, expertise, and experiences.</p>

            <p><a href="https://www.serentehk.com/">Serente Electronics HK LTD</a> is Top BOM sourcing and electronics supply in Hong Kong also distributor of LCD / OLED displays and touch panels.</p>
        `,
        date: 'January 24, 2025',
        author: 'Serente Electronics',
        image: '/blog/corporate-culture-greenconn.jpg',
        category: 'Company Profile'
    },
    {
        id: '11',
        title: 'Premium Capacitors and Customized Ability',
        slug: 'premium-capacitors-customized-ability',
        excerpt: 'jb Capacitors Company Limited is an ISO producer with two factories in Hefei, Anhui, and Nantong, Jiangsu, specializing in various types of capacitors.',
        content: `
            <img src="/blog/content/jb-capacitors-banner.jpg" alt="Supercapacitors - Energy Storage" class="blog-banner-image" />

            <p>Founded in Taiwan in 1980, <a href="https://www.serentehk.com/">jb Capacitors</a> Company Limited is an ISO producer with two factories in Hefei, Anhui, and Nantong, Jiangsu. Plastic film capacitors, radial, SMD, snap-in, screw, lug terminals, aluminum electrolytic capacitors, ceramic capacitors, and tantalum capacitors are among the products we specialize in producing. These capacitors are extensively utilized in the consumer electronics, data processing, telecommunications, and industrial control equipment industries.</p>

            <p><a href="https://www.serentehk.com/">JB Capacitors</a> has been producing a variety of capacitors for more than 40 years. In particular, our audio capacitors come in a variety of levels to meet the demands of various clients. Additionally, X2 safety capacitors are approved by UL, ENEC, and VDE.</p>

            <p>All things considered, <a href="https://www.serentehk.com/">JB's capacitors</a> may offer reasonable costs, fast lead times, and good quality. Additionally, it is able to manufacture capacitors that are tailored to the needs of clients.</p>

            <h3>Features of <a href="https://www.serentehk.com/">JB Capacitors</a>:</h3>
            <ul>
                <li>40+ Years Experience</li>
                <li>Competitive Price</li>
                <li>High Quality</li>
                <li>Good lead time</li>
                <li>Customized Products</li>
                <li>Rapid Issue Resolution (RMA)</li>
            </ul>

            <h3>Key Milestone</h3>
            <p>Since its founding in 1980, <a href="https://www.serentehk.com/">JB Capacitors</a> has grown its product offerings, earned several international certifications, and built a solid position in important global markets.</p>
            <p>Over the past 40 years, we have been able to address the changing needs of numerous industries thanks to our constant innovation and dedication to quality.</p>

            <h3>Main Market</h3>
            <p>The majority of our goods are exported to South Africa, South America, Europe, and the United States. We pledge to provide our clients with the highest caliber goods, prompt delivery, and top-notch after-sale support.</p>

            <p>LCD / OLED displays and touch panels, The semiconductor discrete parts from <a href="https://www.serentehk.com/">Serente Electronics HK LTD.</a></p>
        `,
        date: 'January 25, 2025',
        author: 'Serente Electronics',
        image: '/blog/premium-capacitors-customized-ability.jpg',
        category: 'Product Spotlight'
    },
    {
        id: '12',
        title: 'LCD Display, Touch Panel and Display Touch Integration Solutions',
        slug: 'lcd-display-touch-panel-display-touch-integration-solutions',
        excerpt: 'DISEN Electronics Co., Ltd. is a professional manufacturer of LCD displays, touch panels, and display touch integration solutions.',
        content: `
            <img src="/blog/content/disen-banner.jpg" alt="LCD Digital Signage and Touch Screen Display" class="blog-banner-image" />

            <p>Founded in 2020, <a href="https://www.serentehk.com/">DISEN Electronics Co., Ltd</a>. is a professional manufacturer of LCD displays, touch panels, and display touch integration solutions with a focus on research and development, production, and marketing both standard and customized LCD and touch products. TFT LCD panels, TFT LCD modules with capacitive and resistive touchscreens (supporting air and optical bonding), LCD controller boards and touch controller boards, industrial displays, medical display solutions, industrial PC solutions, custom display solutions, PCB boards, and controller board solutions are among our offerings.</p>

            <p>We can offer you comprehensive specifications, reasonably priced goods, and customized services.</p>

            <h3>What Can <a href="https://www.serentehk.com/">DISEN</a> Do:</h3>
            <p>We are committed to providing each of our customers with access to the most recent state-of-the-art display technology, which can create cutting-edge viewing experiences in almost any environment.</p>

            <p><a href="https://www.serentehk.com/">DISEN</a> offers hundreds of standard LCD displays and touch products for customers to choose from; our team also offers expert customization services; our high-quality touch and display products have a wide range of applications, including industrial PCs, instruments controllers, smart homes, metering, medical devices, automotive dashboards, white goods, 3D printers, coffee makers, treadmills, elevators, door phones, rugged tablets, notebooks, GPS systems, smart point-of-sale machines, payment devices, thermostats, parking systems, media advertisements, and more.</p>

            <h3>Company Culture:</h3>
            <p>Become a leader in customized LCD industry.</p>
            <p>Attitude determines success or failure, Unity determines the future. Strengthen self without stopping, and hold world with virtue.</p>

            <p>LCD / OLED displays and touch panels, semiconductor discrete parts is mainly Purchased from <a href="https://www.serentehk.com/">Serente Electronics HK LTD</a> as they are industrial semiconductor supplier.</p>
        `,
        date: 'January 26, 2025',
        author: 'Serente Electronics',
        image: '/blog/lcd-display-touch-panel-display-touch-integration-solutions.jpg',
        category: 'Product Spotlight'
    },
    {
        id: '13',
        title: 'Shipment Of Capacitors',
        slug: 'shipment-capacitors',
        excerpt: 'Information about shipping capacitors to various countries with processing and shipping times.',
        content: `
            <img src="/blog/content/hongda-capacitors-banner.jpg" alt="Exxelia Alcon Electronics Capacitors" class="blog-banner-image" />

            <p>We can ship to the majority of nations. Usually, you can place an order, and we'll ship it.</p>

            <p>You will receive a confirmation email after the order has been approved and validated. As soon as your order is confirmed, we will start preparing it. (Note: In the event of credit card fraud, we must verify your personal details for some large orders. Please confirm that your phone number or email address is active and correct.</p>

            <p>Total Delivery Time = Processing Time + Shipping Time (Processing Time 10~15 business days + Shipping Time 7-10 business days = 17-25 business days), For some large orders or special products, we need to check case by case.</p>

            <h3>Please note:</h3>
            <p>Some packages may be scrutinized upon arrival at local customs and may be subject to duties due to overseas shipping. As a result, purchasers must take note of the notice provided by local customs. Local customs is responsible for collecting duties and taxes; the vendor is not entitled to collect any duties or taxes from the customer.</p>

            <h3>General Information:</h3>
            <p>You agree to be governed by the following terms and conditions ("Terms and Conditions", "Terms"), as well as any additional terms, conditions, and policies mentioned herein and/or accessible via hyperlink, by using our site and/or making purchases from us. All users of the site, including browsers, suppliers, customers, merchants, and/or content producers, are subject to these terms and conditions.</p>

            <p><a href="https://hongdacap.com.hk/Terms-of-Service/">Please read</a> Before visiting or use our website, carefully read these terms and conditions. You accept these terms and conditions by using or accessing any portion of this website. You are not permitted to use any of the services or visit this website if you do not accept all of the terms and conditions of this agreement. Acceptance is specifically restricted to these terms and conditions if they are regarded as an offer.</p>

            <p>The terms and conditions will also apply to any new tools or features that are introduced to the present store. The most recent version of the terms and conditions is always available on this site. By publishing updates and/or modifications on our website, we retain the right to amend, modify, or replace any portion of these terms and conditions. It is your obligation to periodically review this site for updates. You agree to such changes by continuing to use or access the site after they are posted.</p>

            <p><a href="https://www.serentehk.com/">Serente Electronics HK LTD</a> is a Partnered Distributor of <a href="https://www.serentehk.com/">Hongda Capacitors</a> for Semiconductor supplies in Hong Kong.</p>
        `,
        date: 'January 27, 2025',
        author: 'Serente Electronics',
        image: '/blog/shipment-capacitors.jpg',
        category: 'Logistics'
    },
    {
        id: '14',
        title: 'Professional LCD Module Manufacturer',
        slug: 'professional-lcd-module-manufacturer',
        excerpt: 'Microtech Technology Company Limited provides expert design and manufacturing services for hundreds of different types of liquid crystal display modules and touch panels.',
        content: `
            <img src="/blog/content/microtech-banner.jpg" alt="LCD Manufacturer - Highlystar / Microtech" class="blog-banner-image" />

            <p>Founded in 2001, <a href="https://www.serentehk.com/">Microtech Technology Company Limited</a> provides expert design and manufacturing services for hundreds of different types of liquid crystal display modules and touch panels, including TN, FSTN, TFT, RTP, and CTP. <a href="https://www.serentehk.com/">Microtech's</a> products are widely utilized in industrial equipment, medical devices, home intelligent devices, digital cameras, video game devices, instruments, and more due to its high contrast, quick response time, broad viewable angle, and low power consumption. Since its founding, the management has developed consumer reliance by adhering to a human-oriented strategy. To meet with these beliefs and ISO 9001:2015 standards, <a href="https://www.serentehk.com/">Microtech</a> keeps on recruiting qualified professionals, adopting innovative technology, developing new products, improving process and upgrading quality. <a href="https://www.serentehk.com/">Microtech</a> has built long-term strategic partnerships with both domestic and international clients thanks to its strong R&amp;D capabilities, exceptional product quality, and professional service.</p>

            <p>With strong technical research and development strength, excellent and steady product quality and professional and attentive service, <a href="https://www.serentehk.com/">Microtech Technology Co., Ltd</a>. has gained the favor of many enterprises at home and abroad, and has built a good cooperative connection. ZTE, Huawei, Archos, Philips, Siemens, TCL, and more companies have customer reps.</p>

            <p>The quality policy of "Customer First, Quality First, Practical Innovation, Excellence, Safety and Environmental Protection, Professional and High Efficiency" is fully implemented by <a href="https://www.serentehk.com/">Microtech Technology Co., Ltd</a>. based on the quality idea of "Quality is the best salesman".</p>

            <p>To give clients flawless goods and services, it is imperative that open design, manufacture, and after-sales support be completed simultaneously. In addition to meeting the specific needs of different mainland Chinese manufacturers for display quality, the product quality can also satisfy the high consistency and high dependability of display module impacts of well-known brands in Europe, America, and Asia-Pacific.</p>

            <p><a href="https://www.serentehk.com/">Microtech's</a> Trusted Partner is <a href="https://www.serentehk.com/">Serente Electronics HK LTD</a>, the best semiconductor components suppliers in Hong Kong.</p>
        `,
        date: 'January 28, 2025',
        author: 'Serente Electronics',
        image: '/blog/professional-lcd-module-manufacturer.jpg',
        category: 'Company Profile'
    },
    {
        id: '15',
        title: 'Lighting Wire Harnesses',
        slug: 'lighting-wire-harnesses',
        excerpt: 'Romtronic is a skilled Chinese maker of wire harnesses and cable assemblies, specializing in OEM and ODM production services.',
        content: `
            <img src="/blog/content/romtronic-banner.jpg" alt="Wiring Harness for Electrical Applications" class="blog-banner-image" />

            <p><a href="https://www.serentehk.com/">Romtronic</a> is a skilled Chinese maker of wire harnesses and cable assemblies. <a href="https://www.serentehk.com/">OEM and ODM</a> production services are its area of expertise.</p>

            <p>In addition to other industry standards, our plant is accredited to ISO 9001, ISO 13485:2016, and IATF 16949.</p>

            <p>More than 80 nations, including the US, Germany, Japan, the UK, and others, purchase our bespoke wire harnesses and cable assemblies. Our dedication to quality and service has enabled us to amass a devoted clientele across the globe.</p>

            <p>If you require wire harness or bespoke cable assembly services, please get in touch with us. Our staff is here to help you seven days a week.</p>

            <h3><a href="https://www.serentehk.com/">Romtronic</a> Products:</h3>
            <p>We are your best option for superior solutions in a variety of commercial and industrial industries since we are experts in wire harnesses and custom cable assemblies. DisplayPort, LVDS, USB, HDMI, DVI, SATA, IEEE 1394, RCA, RS232, VGA, and numerous other cable combinations are among the products we offer. We supply tailored solutions for applications in automobile, trailers, medical devices, appliances, robotics, and heavy-duty industrial gear.</p>

            <p>Founded in 1997, <a href="https://www.serentehk.com/">Romtronic International Co., Limited</a> is a design and manufacturing firm with a focus on computer peripherals, wire harnesses, and cable assemblies. We have always placed a significant emphasis on excellent quality management, ongoing improvement, and customer satisfaction with a clear focus on providing high-quality goods and responsible services. "Striving for Perfection Continually" has been our motto since the beginning, motivating us to continuously reach and beyond industry standards.</p>

            <p>In a 10,000-square-meter building, we currently employ over 300 committed and talented workers as well as 50 professional and seasoned management personnel. Enhancing sophisticated manufacturing and equipment testing, as well as developing our quality assurance system, are all part of our continuous improvement program.</p>

            <p>Hong Kong's Best semiconductor distributor is Serente Electronics HK LTD. They are Well known for semiconductor discrete parts.</p>
        `,
        date: 'January 29, 2025',
        author: 'Serente Electronics',
        image: '/blog/lighting-wire-harnesses.jpg',
        category: 'Product Spotlight'
    },
    {
        id: '16',
        title: 'Heavy Duty Connectors',
        slug: 'heavy-duty-connectors',
        excerpt: 'Zhejiang Smico Electrical Technology Co., Ltd. is an integrated high-tech corporation focusing on heavy-duty connection research, production, and sales.',
        content: `
            <img src="/blog/content/smico-banner.jpg" alt="Heavy Duty Connector - TJ Connectors" class="blog-banner-image" />

            <p>Zhejiang <a href="https://www.serentehk.com/">Smico Electrical Technology Co., Ltd</a>. is an integrated high-tech corporation with many years of professional and technical strength, long-term development ambitions, and a focus on heavy-duty connection research, production, and sales. The company is dedicated to offering high-quality products and the best service, so its products may have a leading position in the market by adhering "to the quality of survival, to the credibility of development" and assimilating globally advanced technology and design concepts.</p>

            <h3>Services:</h3>
            <p><a href="https://www.serentehk.com/">SMICO</a> provides our customers with all-inclusive services. Our knowledgeable and experienced staff will assist you in resolving your issues. Please get in touch with us as soon as possible on the product you have chosen, the packaging, the shipping, and any after-sales support you encounter. We will respond to you promptly and satisfactorily.</p>

            <p><a href="https://www.serentehk.com/">SMICO</a> has over 20 years of experience in this field. In addition to being a supplier, <a href="https://www.serentehk.com/">SMICO</a> is a manufacturer with ISO 9001 and UL certifications.</p>

            <p>Check out our most popular services and get the best deal with <a href="https://www.serentehk.com/">Serente Electronics HK LTD</a>. The Best Industrial Semiconductor Distributor including Connectors and Resistors.</p>
        `,
        date: 'January 30, 2025',
        author: 'Serente Electronics',
        image: '/blog/heavy-duty-connectors.jpg',
        category: 'Product Spotlight'
    },
    {
        id: '17',
        title: 'LCD and LCM Module and Equipment for Industrial Use',
        slug: 'lcd-lcm-module-equipment-industrial-use',
        excerpt: 'Yeebo Display Ltd. is a fully-owned subsidiary of the Yeebo Group (HK259), involved in the development, production, and marketing of display products.',
        content: `
            <img src="/blog/content/yeebo-banner.jpg" alt="Yeebo Display - LCD & LCM Modules" class="blog-banner-image" />

            <p>A fully-owned subsidiary of the <a href="https://www.serentehk.com/">Yeebo Group</a> (HK259), <a href="https://www.serentehk.com/">Yeebo Display Ltd</a>. has mostly been involved in the development, production, and marketing of display products, such as monochrome LCD modules, TFT modules, capacitive touch panels, touch displays, and more. <a href="https://www.serentehk.com/">Yeebo's</a> products are widely available worldwide in important electronic market areas such as telecommunications, medical equipment, industrial applications, and electronic consumables.</p>

            <p>Company production operations are based in three plants in Guangdong Province's Jiangmen and Shenzhen cities, with company headquarters being in Hong Kong. We have state-of-the-art, highly automated manufacturing lines in our LCD foundry and module assembly facilities.</p>

            <p>We are able to customize our services to each and every one of our esteemed clients' needs thanks to our skilled design teams and expert management systems.</p>

            <p><a href="https://www.serentehk.com/">Yeebo</a> has earned ISO9001, ISO14001, and ISO/IATF16949 certifications in pursuit of sustainable development and enhancement of high-quality services and environmental protection.</p>

            <p>For products that need a low-cost, low-power display solution, monochrome LCDs and LCD modules are perfect. Additionally, it is the most advanced display technology available for a variety of product applications, including industrial meters, medical equipment, culinary appliances, and thermostats. Special mechanical and aesthetic requirements can be fully satisfied by customisation services thanks to the benefit of extremely low tooling costs.</p>

            <p><a href="https://www.serentehk.com/">Yeebo</a> is a leading LCD supplier with competence in the design and manufacturing of high-quality Monochrome LCD and LCD modules.</p>

            <p>For a variety of uses, including industrial and automotive, we have been providing both standard and bespoke products.</p>

            <p><a href="https://www.serentehk.com/">Yeebo</a> uses cutting-edge production machinery to guarantee dependable quality and effective delivery.</p>

            <h3>Vision &amp; Mission Statement:</h3>
            <p>To establish <a href="https://www.serentehk.com/">Yeebo</a> as a world class display supplier.</p>
            <p>To Uphold the Group's Core Values And Operational Integrity In Order To Achieve Balanced And Sustainable Business Growth.</p>

            <h3>IMPACT</h3>
            <p>I--Integrity<br/>M--Maturity<br/>P--Positive Attitude<br/>A--Assertiveness<br/>C--Commitment<br/>T--Teamwork</p>

            <p><a href="https://www.serentehk.com/">Serente Electronics HK LTD</a> is a Authorised semiconductor distributor partner of <a href="https://www.serentehk.com/">Yeebo</a>, the Manufacturer of LCD &amp; LCM module equipments.</p>
        `,
        date: 'January 31, 2025',
        author: 'Serente Electronics',
        image: '/blog/lcd-lcm-module-equipment-industrial-use.jpg',
        category: 'Company Profile'
    },
    {
        id: '18',
        title: 'Best Company in High Voltage DC Power',
        slug: 'best-company-high-voltage-dc-power',
        excerpt: 'YM Tech has reduced the size and weight of DC switching devices used for electric vehicles, charging systems, and renewable energy applications.',
        content: `
            <img src="/blog/content/ym-tech-banner.jpg" alt="YM Tech - High Voltage DC Power" class="blog-banner-image" />

            <p><a href="https://www.serentehk.com/">YM Tech</a> has reduced the size and weight of DC switching devices used for electric vehicles, charging systems, energy saving devices, solar power station, wind power station, military weapons and airplanes, etc. Furthermore, <a href="https://www.serentehk.com/">YM Tech</a> will become a leader in the filed of DC switching devices through continued researches on the technologies for cutting off high-voltage.</p>

            <p>Technology considering our environment and human race!</p>
            <p>Future-oriented technology aims at enhancing convenience and health for everyone!</p>
            <p>Future-oriented innovation for increasing customer value!</p>
            <p><a href="https://www.serentehk.com/">YM Tech</a> will take the initiatives!</p>

            <h3>Characteristics of <a href="https://www.serentehk.com/">YM Tech</a> EV Relay</h3>
            <ul>
                <li>Less noise during operation</li>
                <li>Various voltage of coil (DC 12~220VDC)</li>
                <li>Built-in auxiliary contacts</li>
                <li>PMW energy-saving devices(economizer)</li>
                <li>DC1500V High Voltage EV Relay</li>
                <li>DC Bidirectional Switching Relay</li>
            </ul>

            <p>Semiconductor discrete parts are supplied by a distributor of <a href="https://www.serentehk.com/">YM TECH</a>, it is <a href="https://www.serentehk.com/">Serente Electronics HK LTD</a>. They are the Industrial semiconductor suppliers.</p>
        `,
        date: 'February 1, 2025',
        author: 'Serente Electronics',
        image: '/blog/best-company-high-voltage-dc-power.jpg',
        category: 'Product Spotlight'
    }
];

export function getAllPosts(): BlogPost[] {
    return blogPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}
