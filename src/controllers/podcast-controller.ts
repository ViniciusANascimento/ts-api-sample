import { IncomingMessage, ServerResponse } from 'http';
import { PodacastTransferDTO } from '../models/filter-podcast-model';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { serviceListEpisodes } from '../services/list-episodes-service';
import { StatusCode } from '../utils/status-code';

export const getListEpisodes = async (
	request : IncomingMessage,
	response : ServerResponse
	) => {
	const content = await serviceListEpisodes();

	response.writeHead(StatusCode.OK,{'Content-Type': "application/json"});
	response.end(JSON.stringify(content));
}

export const getFilterEpisodes = async(
	request: IncomingMessage,
	response: ServerResponse
	) =>{
		const content: PodacastTransferDTO = await serviceFilterEpisodes(request.url)

		response.writeHead(content.statusCode,{'Content-Type': "application/json"});
		response.end(JSON.stringify(content.body));
}