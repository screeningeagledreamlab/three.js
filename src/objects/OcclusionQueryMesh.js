import { Mesh } from './Mesh.js';

/**
 * @author simon paris / https://github.com/simon-paris
 */

class OcclusionQueryMesh extends Mesh {

	constructor( geometry, material ) {

		super( geometry, material );

		this.isOcclusionQueryMesh = true;

		this.type = 'OcclusionQueryMesh';

		this.occlusionQueryCallback = null;
		this.cameraFilter = null;
		this.maxAliveQueries = 1;

	}

	pollQueries() {

		this.dispatchEvent( { type: 'pollQueries' } );

	};

	dispose() {

		this.dispatchEvent( { type: 'dispose' } );

	}

}


export { OcclusionQueryMesh };
