function initCity(scene) {
    var material = null;


    //
    const loadersky = new THREE.CubeTextureLoader();
    const texturesky = loadersky.load([
      './assets/nebula/posx.png',
      './assets/nebula/negx.png',
      './assets/nebula/posy.png',
      './assets/nebula/negy.png',
      './assets/nebula/posz.png',
      './assets/nebula/negz.png',
    ]);
    scene.background = texturesky;


    function getCity() {
        /*
        var uniform = {
            u_color: { value: new THREE.Color("#5588aa") },
            u_tcolor: { value: new THREE.Color("#ff9800") },
            u_r: { value: 0.25 },
            u_length: { value: 20 },//扫过区域
            u_max: { value: 300 }//扫过最大值
        };
        var Shader = {
            vertexShader: ` 
                varying vec3 vp;
                void main(){
                vp = position; 
                gl_Position	= projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                varying vec3 vp;
                uniform vec3 u_color;
                uniform vec3 u_tcolor;
                uniform float u_r;
                uniform float u_length;
                uniform float u_max;
                float getLeng(float x, float y){
                    return  sqrt((x-0.0)*(x-0.0)+(y-0.0)*(y-0.0));
                }
                void main(){ 
                    float uOpacity = 0.3; 
                    vec3 vColor = u_color;
                    float uLength = getLeng(vp.x,vp.z);
                    if ( uLength <= u_r && uLength > u_r - u_length ) { 
                        float op = sin( (u_r - uLength) / u_length ) * 0.6 + 0.3 ;
                        uOpacity = op; 
                        if( vp.y<0.0){
                            vColor  = u_tcolor * 0.6; 
                        }else{ 
                            vColor = u_tcolor;
                        };
                    } 
                    gl_FragColor = vec4(vColor,uOpacity);
                }
            `
        }
        
        material = new THREE.ShaderMaterial({
            vertexShader: Shader.vertexShader,
            fragmentShader: Shader.fragmentShader,
            side: THREE.DoubleSide,
            uniforms: uniform,
            transparent: true,
            depthWrite: false,
        });

        
        var loaderobj = new THREE.OBJLoader()
        loaderobj.load('./assets/city-gry1.obj', function (object) {
            object.children.forEach(element => {
                element.material = material
            });
            let size = 0.3;
            object.scale.set(size, size, size)
            scene.add(object);
            object.name = "city";
        });*/

     

			/*
			geometryP1 = new THREE.BoxGeometry(-10,-10,10);	 
			var materialP1 = new THREE.MeshBasicMaterial( { color: 0x00ff00 ,side:THREE.DoubleSide} );
			circleP1 = new THREE.Mesh( geometryP1, materialP1 );			
			var group2 = new THREE.Group();
			group.add(group2);
			group2.add(circleP1);*/

            // Generate a number of text labels, from 1µm in size up to 100,000,000 light years
			// Try to use some descriptive real-world examples of objects at each scale

            function initTextAndSphere( font ) {

                group = new THREE.Group();
                scene.add(group);

				const materialargs = {
					color: 0xffffff,
					specular: 0x050505,
					shininess: 50,
					emissive: 0x000000
				};
                
				const geometry = new THREE.SphereGeometry( 0.5, 24, 12 );
                const size = 0.1;

                //readcsv
                var loader = new THREE.FileLoader(); 

                //load a text file and output the result to the console
                loader.load(
                    // resource URL
                    'data2.csv',
                    // onLoad callback
                    function ( data ) 
                    {
                        // output the text to the console
                        console.log( data )
                        var csvarry = data.split("\n");
                        for(var i = 1;i<csvarry.length;i++)
                        {
                            var data = {};
                            var temp = csvarry[i].split(",");
                            //console.log( temp );
                            //c.position.set(0, 0, 0);
                            var x = parseFloat(temp[0])*1;
                            var y = parseFloat(temp[1])*1;
                            var z = parseFloat(temp[2])*100;
                            console.log( x );
                            console.log( y );
                            console.log( z );

                            
                            const labelgeo = new THREE.TextGeometry( temp[2], {
                                font: font,
                                size: size,
                                height: size / 2
                            } );

                            //materialargs.color = new THREE.Color().setHSL( Math.random(), 0.5, 0.5 );
                            materialargs.color = new THREE.Color().setHSL(  parseFloat(temp[2])*20, 0.5, 0.5 );

                            const material = new THREE.MeshPhongMaterial( materialargs );
                            //text
                            const textmesh = new THREE.Mesh( labelgeo, material );
                            textmesh.position.set(x,z+1,y); 
                            //group.add( textmesh ); //slow

                            //dot
                            const dotmesh = new THREE.Mesh( geometry, material );
                            dotmesh.position.set(x,z,y); 
                            group.add(dotmesh);
                         
                        };

                    }
                );
                /*
				for ( let i = 0; i < labeldata.length; i ++ ) {

					const scale = labeldata[ i ].scale || 1;

					const labelgeo = new THREE.TextGeometry( labeldata[ i ].label, {
						font: font,
						size: labeldata[ i ].size,
						height: labeldata[ i ].size / 2
					} );

					labelgeo.computeBoundingSphere();

					// center text
					labelgeo.translate( - labelgeo.boundingSphere.radius, 0, 0 );

					materialargs.color = new THREE.Color().setHSL( Math.random(), 0.5, 0.5 );

					const material = new THREE.MeshPhongMaterial( materialargs );

					const group = new THREE.Group();
					group.position.z = - labeldata[ i ].size * scale;
					scene.add( group );

					const textmesh = new THREE.Mesh( labelgeo, material );
					textmesh.scale.set( scale, scale, scale );
					textmesh.position.z = - labeldata[ i ].size * scale;
					textmesh.position.y = labeldata[ i ].size / 4 * scale;
					group.add( textmesh );

					const dotmesh = new THREE.Mesh( geometry, material );
					dotmesh.position.y = - labeldata[ i ].size / 4 * scale;
					dotmesh.scale.multiplyScalar( labeldata[ i ].size * scale );
					group.add( dotmesh );

				}*/
			}
            
			//
            const loaderf = new THREE.FontLoader();
            loaderf.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {

                initTextAndSphere( font );

            } );


    }
    this.animation = function (dalte) {
        if (material) {
            material.uniforms.u_r.value += dalte * 50;
            if (material.uniforms.u_r.value >= 300) {
                material.uniforms.u_r.value = 20
            }
        }
    }

    getCity()

}