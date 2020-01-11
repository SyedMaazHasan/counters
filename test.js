class Wrapper extends Component {
  componentDidMount() {
    this.props.getAllTehDatas();
  }

  render() {
    return <WrappedComponent {...this.props} />;
  }
}

const mapStateToProps = () => ({
  // ...
});

const mapDispatchToProps = {
  getAllTehDatas
};

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
