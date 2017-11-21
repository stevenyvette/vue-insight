import fileMapping from '../const/mappingEnum'

export default {
	SET_FILE_PATH(state, filename) {
		state.chart.filename = fileMapping(filename)
	},
}