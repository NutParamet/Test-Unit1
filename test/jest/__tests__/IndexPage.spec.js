import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'

describe('IndexPage', () => {
  it('ตรวจสอบหัวข้อ (title)', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('วิวัฒนาการของโลกสมัยใหม่')
  });
  it('ตรวจสอบตัวแปรชื่อว่า (title)', () => {
    const wrapper = shallowMount(IndexPage, {
      data () {
        return {
          title: 'ฉันรักวิว'
        }
      }
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('ฉันรักวิว')
  });
})

describe('ทดสอบ form', () => {
  it('Test form exits', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('form').exists()).toBe(true)
  });

  it('Test input in form', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('form > input').exists()).toBe(true)
  });

  it('Test button exits', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('button').exists()).toBe(true)
  });
})

describe('ทดสอบข้อมูลส่วนตัว' , () => {
  it('ตรวจสอบตัวแปรชื่อว่า (Id)', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('form > input#Id').exists()).toBe(true)
  });

  it('ตรวจสอบตัวแปรชื่อว่า (firstName)', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('form > input#firstName').exists()).toBe(true)
  });

  it('ตรวจสอบตัวแปรชื่อว่า (secondName)', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('form > input#secondName').exists()).toBe(true)
  });

  it('ตรวจสอบตัวแปรชื่อว่า (Nickname)', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('form > input#Nickname').exists()).toBe(true)
  });

})

//
// ใช้วิธีนี้ก็ได้เหมือนกัน
//
// it('ตรวจสอบตัวแปรชื่อว่า (Id)', () => {
//   const wrapper = shallowMount(IndexPage, {
//     data () {
//       return {
//         Id: 'ฉันรักวิว'
//       }
//     }
//   })
//   let input = wrapper.find('.htmlClass input')
//   expect(input.element.value).toBe('ฉันรักวิว')
// });
