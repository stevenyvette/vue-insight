export const getFilePath = ({ dispatch, commit, state }, e) => {
	console.log(e.target.text);
	let filename = e.target.text;
	commit('SET_FILE_PATH', filename);
}