import {pull} from './communityFetch'
import {Community} from './community'
test('test pull', () => {

    const data = pull()
    expect(data[0]).toEqual({})
    let comm1 = new Community();
    expect(Object.keys(comm1.Cities).length).toEqual(1);
    pull();
    expect(Object.keys(comm1.Cities).length).toEqual(0);
})