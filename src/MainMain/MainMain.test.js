import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import MainMain from './MainMain'

import NotefulContext from '../NotefulContext.js';
import DummyStore from "../dummy-store.js"

describe(`MainMain component`, () => {
	const props = {
		"notes": [
			{
				"id": "1",
				"name": "Dogs",
				"modified": "2019-01-03T00:00:00.000Z",
				"folder_id": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
				"content": "Corporis accusamus placeat quas non voluptas. Harum fugit molestias qui. Velit ex animi reiciendis quasi. Suscipit totam delectus ut voluptas aut qui rerum. Non veniam eius molestiae rerum quam.\n \rUnde qui aperiam praesentium alias. Aut temporibus id quidem recusandae voluptatem ut eum. Consequatur asperiores et in quisquam corporis maxime dolorem soluta. Et officiis id est quia sunt qui iste reiciendis saepe. Ut aut doloribus minus non nisi vel corporis. Veritatis mollitia et molestias voluptas neque aspernatur reprehenderit.\n \rMaxime aut reprehenderit mollitia quia eos sit fugiat exercitationem. Minima dolore soluta. Quidem fuga ut sit voluptas nihil sunt aliquam dignissimos. Ex autem nemo quisquam voluptas consequuntur et necessitatibus minima velit. Consequatur quia quis tempora minima. Aut qui dolor et dignissimos ut repellat quas ad."
			},
			{
				"id": "2",
				"name": "Cats",
				"modified": "2018-08-15T23:00:00.000Z",
				"folder_id": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
				"content": "Eos laudantium quia ab blanditiis temporibus necessitatibus. Culpa et voluptas ut sed commodi. Est qui ducimus id. Beatae sint aspernatur error ullam quae illum sint eum. Voluptas corrupti praesentium soluta cumque illo impedit vero omnis nisi.\n \rNam sunt reprehenderit soluta quis explicabo impedit id. Repudiandae eligendi libero ad ut dolores. Laborum nihil sint et labore iusto reiciendis cum. Repellat quos recusandae natus nobis ullam autem veniam id.\n \rEsse blanditiis neque tempore ex voluptate commodi nemo. Velit sapiente at placeat eveniet ut rem. Quidem harum ut dignissimos. Omnis pariatur quas aperiam. Quasi voluptas qui nulla. Iure quas veniam aut quia et."
			},
			{
				"id": "3",
				"name": "Pigs",
				"modified": "2018-03-01T00:00:00.000Z",
				"folder_id": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
				"content": "Occaecati dignissimos quam qui facere deserunt quia. Quaerat aut eos laudantium dolor odio officiis illum. Velit vel qui dolorem et.\n \rQui ut vel excepturi in at. Ut accusamus cumque quia sapiente ut ipsa nesciunt. Dolorum quod eligendi qui aliquid sint.\n \rAt id deserunt voluptatem et rerum. Voluptatem fuga tempora aut dignissimos est odio maiores illo. Fugiat in ad expedita voluptas voluptatum nihil."
			},
			{
				"id": "4",
				"name": "Birds",
				"modified": "2019-01-04T00:00:00.000Z",
				"folder_id": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
				"content": "Eum culpa odit. Veniam porro molestiae dolores sunt reiciendis culpa. Atque accusamus dolore eos odio facilis. Dolores reprehenderit et provident dolores possimus mollitia.\n \rAdipisci dolor necessitatibus nihil quod quia vel veniam. Placeat qui vero. Cum cum amet at nisi. Distinctio rerum similique explicabo atque ratione. Recusandae omnis earum est. Quas iusto nihil itaque architecto ea.\n \rPerferendis neque doloremque quibusdam accusantium ut dolor illum dolorum. Vero et similique nihil beatae. In repellendus dolores praesentium. Optio alias rerum culpa placeat maiores natus sed. Ipsa et qui cum ex maiores."
			}
		]
	}
	
	const contextValue = {
		...DummyStore
	}

	it('renders with no props', () => {
		const wrapper = shallow(
			<NotefulContext.Provider value={contextValue}>
				<MainMain />
			</NotefulContext.Provider>
		)
		expect(toJson(wrapper)).toMatchSnapshot()
	})

	it('renders the MainMain given props', () => {
		const wrapper = shallow(
			<NotefulContext.Provider value={contextValue}>
				<MainMain {...props} />
			</NotefulContext.Provider>
		)
		expect(toJson(wrapper)).toMatchSnapshot()
	})
})
