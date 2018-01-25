class Container extends React.Component {
  state = {
    activeIndex: null
  }

  handleClick = (index) => this.setState({ activeIndex: index })

  render() {
    return <div>
      <MyClickable name="a" index={0} isActive={ this.state.activeIndex===0 } onClick={ this.handleClick } />
      <MyClickable name="b" index={1} isActive={ this.state.activeIndex===1 } onClick={ this.handleClick }/>
      <MyClickable name="c" index={2} isActive={ this.state.activeIndex===2 } onClick={ this.handleClick }/>
    </div>
  }
}

class MyClickable extends React.Component {
  handleClick = () => this.props.onClick(this.props.index)

  render() {
    return <button
      type='button'
      className={
        this.props.isActive ? 'active' : 'album'
      }
      onClick={ this.handleClick }
    >
      <span>{ this.props.name }</span>
    </button>
  }
}

ReactDOM.render(<Container />, document.getElementById('app'))
